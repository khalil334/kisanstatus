const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CONFIG = {
  articlesDataPath: path.join(__dirname, '../lib/articles-data.ts'),
  componentsDir: path.join(__dirname, '../components/articles'),
  searchDirs: [
    path.join(__dirname, '../components/articles'),
    path.join(__dirname, '../components/articles/kisanguides'),
  ],
  backupEnabled: true,
  dryRun: process.argv.includes('--dry-run'),
};

function getGitDates(filePath) {
  try {
    const firstCommit = execSync(
      `git log --diff-filter=A --follow --format=%aI -- "${filePath}" | tail -1`,
      { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();

    const lastCommit = execSync(
      `git log -1 --format=%aI -- "${filePath}"`,
      { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();

    if (!firstCommit || !lastCommit) {
      return null;
    }

    return {
      publishedTime: firstCommit,
      modifiedTime: lastCommit,
    };
  } catch {
    return null;
  }
}

function createBackup(filePath) {
  if (!CONFIG.backupEnabled) return;

  const backupPath = `${filePath}.backup-${Date.now()}`;
  fs.copyFileSync(filePath, backupPath);
  console.log(`Backup created: ${backupPath}`);
}

function findComponentFile(componentName) {
  for (const dir of CONFIG.searchDirs) {
    for (const ext of ['.tsx', '.ts']) {
      const p = `${dir}/${componentName}${ext}`;
      if (fs.existsSync(p)) return p;
    }
  }
  return null;
}

function updateArticlesData() {
  if (!fs.existsSync(CONFIG.articlesDataPath)) {
    console.log('articles-data.ts not found!');
    process.exit(1);
  }

  createBackup(CONFIG.articlesDataPath);

  let content = fs.readFileSync(CONFIG.articlesDataPath, 'utf-8');
  const originalContent = content;
  let updatedCount = 0;
  let skippedCount = 0;
  let noGitCount = 0;

  const componentPattern = /component:\s*'([^']+)'/g;
  const matches = [...content.matchAll(componentPattern)];

  console.log(`\nFound ${matches.length} articles to check...\n`);

  if (CONFIG.dryRun) {
    console.log('DRY RUN MODE - No changes will be made\n');
  }

  matches.forEach((match) => {
    const componentName = match[1];

    const componentFile = findComponentFile(componentName);

    if (!componentFile) {
      console.log(`${componentName} - File not found`);
      skippedCount++;
      return;
    }

    try {
      const dates = getGitDates(componentFile);

      if (!dates) {
        console.log(` ${componentName} - No git history for ${componentFile}; keeping existing dates (shallow clone?)`);
        noGitCount++;
        skippedCount++;
        return;
      }

      const publishedRegex = new RegExp(
        `(component:\\s*'${componentName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?publishedTime:\\s*)'[^']+'`,
        'g'
      );

      const modifiedRegex = new RegExp(
        `(component:\\s*'${componentName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?modifiedTime:\\s*)'[^']+'`,
        'g'
      );

      let updated = false;

      if (publishedRegex.test(content)) {
        content = content.replace(publishedRegex, `$1'${dates.publishedTime}'`);
        updated = true;
      }

      if (modifiedRegex.test(content)) {
        content = content.replace(modifiedRegex, `$1'${dates.modifiedTime}'`);
        updated = true;
      }

      if (updated) {
        updatedCount++;
        console.log(`${componentName}`);
        console.log(`   Found at: ${componentFile}`);
        console.log(`   Published: ${dates.publishedTime}`);
        console.log(`   Modified:  ${dates.modifiedTime}`);
        console.log('');
      } else {
        console.log(`⏭ ${componentName} - No dates found in entry`);
        skippedCount++;
      }
    } catch (e) {
      console.log(`${componentName} - Error: ${e.message}`);
      skippedCount++;
    }
  });

  if (!CONFIG.dryRun && content !== originalContent) {
    fs.writeFileSync(CONFIG.articlesDataPath, content, 'utf-8');
    console.log(`\nUpdated ${updatedCount} articles successfully!`);
  } else if (CONFIG.dryRun) {
    console.log(`\nDRY RUN: Would update ${updatedCount} articles`);
  } else {
    console.log(`\nℹ No changes needed`);
  }

  console.log(`Summary: ${updatedCount} updated, ${skippedCount} skipped`);

  if (matches.length > 0 && noGitCount === matches.length) {
    console.log('\n Git history unavailable for ALL articles (shallow clone?). Dates were NOT updated — existing values kept.');
  }
}

updateArticlesData();

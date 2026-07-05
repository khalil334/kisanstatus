const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 🎯 Configuration
const CONFIG = {
  articlesDataPath: path.join(__dirname, '../lib/articles-data.ts'),
  componentsDir: path.join(__dirname, '../components/articles'),
  backupEnabled: true,
  dryRun: process.argv.includes('--dry-run'),
};

function getGitDates(filePath) {
  try {
    // First commit (creation date)
    const firstCommit = execSync(
      `git log --diff-filter=A --follow --format=%aI -- "${filePath}" | tail -1`,
      { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();

    // Last commit (modification date)
    const lastCommit = execSync(
      `git log -1 --format=%aI -- "${filePath}"`,
      { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();

    return {
      publishedTime: firstCommit || new Date().toISOString(),
      modifiedTime: lastCommit || new Date().toISOString(),
    };
  } catch (error) {
    console.log(`⚠️  Git dates not found for ${filePath}, using current date`);
    return {
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString(),
    };
  }
}

function createBackup(filePath) {
  if (!CONFIG.backupEnabled) return;
  
  const backupPath = `${filePath}.backup-${Date.now()}`;
  fs.copyFileSync(filePath, backupPath);
  console.log(`💾 Backup created: ${backupPath}`);
}

function updateArticlesData() {
  if (!fs.existsSync(CONFIG.articlesDataPath)) {
    console.log('❌ articles-data.ts not found!');
    process.exit(1);
  }

  // Create backup before updating
  createBackup(CONFIG.articlesDataPath);

  let content = fs.readFileSync(CONFIG.articlesDataPath, 'utf-8');
  const originalContent = content;
  let updatedCount = 0;
  let skippedCount = 0;

  // Find all component entries
  const componentPattern = /component:\s*'([^']+)'/g;
  const matches = [...content.matchAll(componentPattern)];

  console.log(`\n🔍 Found ${matches.length} articles to check...\n`);

  if (CONFIG.dryRun) {
    console.log('🔸 DRY RUN MODE - No changes will be made\n');
  }

  matches.forEach((match) => {
    const componentName = match[1];
    
    // Try multiple possible file paths
    const possiblePaths = [
      `${CONFIG.componentsDir}/${componentName}.tsx`,
      `${CONFIG.componentsDir}/${componentName}.ts`,
    ];

    let componentFile = null;
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        componentFile = p;
        break;
      }
    }

    if (!componentFile) {
      console.log(`❌ ${componentName} - File not found`);
      skippedCount++;
      return;
    }

    try {
      const dates = getGitDates(componentFile);

      // More robust regex - handles both orders
      const publishedRegex = new RegExp(
        `(component:\\s*'${componentName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?publishedTime:\\s*)'[^']+'`,
        'g'
      );
      
      const modifiedRegex = new RegExp(
        `(component:\\s*'${componentName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?modifiedTime:\\s*)'[^']+'`,
        'g'
      );

      let updated = false;
      
      // Update publishedTime
      if (publishedRegex.test(content)) {
        content = content.replace(publishedRegex, `$1'${dates.publishedTime}'`);
        updated = true;
      }
      
      // Update modifiedTime
      if (modifiedRegex.test(content)) {
        content = content.replace(modifiedRegex, `$1'${dates.modifiedTime}'`);
        updated = true;
      }

      if (updated) {
        updatedCount++;
        console.log(`✅ ${componentName}`);
        console.log(`   📅 Published: ${dates.publishedTime}`);
        console.log(`   🔄 Modified:  ${dates.modifiedTime}`);
        console.log('');
      } else {
        console.log(`⏭️  ${componentName} - No dates found in entry`);
        skippedCount++;
      }
    } catch (e) {
      console.log(`❌ ${componentName} - Error: ${e.message}`);
      skippedCount++;
    }
  });

  // Write changes
  if (!CONFIG.dryRun && content !== originalContent) {
    fs.writeFileSync(CONFIG.articlesDataPath, content, 'utf-8');
    console.log(`\n🎉 Updated ${updatedCount} articles successfully!`);
  } else if (CONFIG.dryRun) {
    console.log(`\n🔸 DRY RUN: Would update ${updatedCount} articles`);
  } else {
    console.log(`\nℹ️  No changes needed`);
  }

  console.log(`📊 Summary: ${updatedCount} updated, ${skippedCount} skipped`);
}

// Run
updateArticlesData();
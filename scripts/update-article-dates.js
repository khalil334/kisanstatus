const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

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

function updateArticlesData() {
  const articlesDataPath = path.join(__dirname, '../lib/articles-data.ts');

  if (!fs.existsSync(articlesDataPath)) {
    console.log('⚠️  articles-data.ts not found, skipping date update');
    process.exit(0);
  }

  let content = fs.readFileSync(articlesDataPath, 'utf-8');
  let updatedCount = 0;

  const componentPattern = /component:\s*'([^']+)'/g;
  const matches = [...content.matchAll(componentPattern)];

  console.log(`🔍 Found ${matches.length} articles to check...`);

  matches.forEach((match) => {
    const componentName = match[1];
    const componentFile = `components/articles/${componentName}.tsx`;

    try {
      const dates = getGitDates(componentFile);

      const blockRegex = new RegExp(
        `(component:\\s*'${componentName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?)publishedTime:\\s*'[^']+'([\\s\\S]*?)modifiedTime:\\s*'[^']+'`,
        'g'
      );

      const newContent = content.replace(blockRegex, (fullMatch, before, between) => {
        updatedCount++;
        console.log(`✅ ${componentName}`);
        console.log(`   Published: ${dates.publishedTime}`);
        console.log(`   Modified:  ${dates.modifiedTime}`);
        return `${before}publishedTime: '${dates.publishedTime}'${between}modifiedTime: '${dates.modifiedTime}'`;
      });

      if (newContent !== content) {
        content = newContent;
      }
    } catch (e) {
      console.log(`⏭️  Skipping ${componentName}: ${e.message}`);
    }
  });

  fs.writeFileSync(articlesDataPath, content, 'utf-8');
  console.log(`\n🎉 Updated ${updatedCount} articles successfully!`);
}

updateArticlesData();
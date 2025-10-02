#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Directories to scan
const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const CATEGORIES_TO_SCAN = [
  'AI_ML', 'Agriculture', 'Automotive', 'Creative_Content', 'Data_Analytics',
  'DevOps', 'E_Commerce_Retail', 'Education', 'Email_Automation', 'Energy',
  'Finance_Accounting', 'Gaming', 'Government_NGO', 'HR', 'Healthcare',
  'IoT', 'Legal_Tech', 'Manufacturing', 'Media', 'Misc', 'Productivity',
  'Real_Estate', 'Social_Media', 'Travel'
];

// Create public directory if it doesn't exist
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Function to scan directory for JSON files
function scanDirectory(dirPath) {
  const files = [];
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isFile() && item.endsWith('.json')) {
      files.push({
        name: item,
        path: fullPath,
        relativePath: path.relative(ROOT_DIR, fullPath)
      });
    }
  }
  
  return files;
}

// Function to read README content if exists
function readCategoryReadme(categoryPath) {
  const readmePath = path.join(categoryPath, 'README.md');
  if (fs.existsSync(readmePath)) {
    return fs.readFileSync(readmePath, 'utf8');
  }
  return null;
}

// Generate catalog data
const catalog = {
  generated: new Date().toISOString(),
  totalTemplates: 0,
  categories: []
};

console.log('Generating catalog...');

for (const category of CATEGORIES_TO_SCAN) {
  const categoryPath = path.join(ROOT_DIR, category);
  
  if (!fs.existsSync(categoryPath)) {
    console.log(`⚠️  Skipping ${category} (not found)`);
    continue;
  }
  
  const files = scanDirectory(categoryPath);
  const readme = readCategoryReadme(categoryPath);
  
  if (files.length > 0) {
    catalog.categories.push({
      name: category,
      displayName: category.replace(/_/g, ' '),
      templateCount: files.length,
      templates: files.map(f => f.name),
      readme: readme
    });
    
    catalog.totalTemplates += files.length;
    console.log(`✅ ${category}: ${files.length} templates`);
  }
}

// Write catalog JSON
const catalogPath = path.join(PUBLIC_DIR, 'catalog.json');
fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));
console.log(`\n✅ Catalog generated: ${catalogPath}`);
console.log(`📊 Total templates: ${catalog.totalTemplates}`);
console.log(`📁 Total categories: ${catalog.categories.length}`);

// Generate HTML index page
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>n8n Free Templates - 200+ Ready-to-Import Workflows</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 20px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 10px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      overflow: hidden;
    }
    header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px;
      text-align: center;
    }
    header h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }
    header p {
      font-size: 1.2em;
      opacity: 0.9;
    }
    .stats {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin-top: 20px;
    }
    .stat {
      text-align: center;
    }
    .stat-number {
      font-size: 2em;
      font-weight: bold;
    }
    .stat-label {
      font-size: 0.9em;
      opacity: 0.8;
    }
    main {
      padding: 40px;
    }
    .intro {
      text-align: center;
      margin-bottom: 40px;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 8px;
    }
    .intro h2 {
      color: #667eea;
      margin-bottom: 10px;
    }
    .categories {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    .category-card {
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      transition: all 0.3s ease;
      background: white;
    }
    .category-card:hover {
      border-color: #667eea;
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
      transform: translateY(-2px);
    }
    .category-name {
      font-size: 1.4em;
      font-weight: bold;
      color: #667eea;
      margin-bottom: 10px;
    }
    .category-count {
      color: #666;
      font-size: 0.9em;
      margin-bottom: 15px;
    }
    .template-list {
      list-style: none;
      font-size: 0.85em;
      max-height: 200px;
      overflow-y: auto;
    }
    .template-list li {
      padding: 4px 0;
      color: #555;
      border-bottom: 1px solid #f0f0f0;
    }
    .template-list li:last-child {
      border-bottom: none;
    }
    footer {
      background: #f8f9fa;
      padding: 30px;
      text-align: center;
      border-top: 1px solid #e0e0e0;
    }
    .btn {
      display: inline-block;
      padding: 12px 30px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      transition: transform 0.2s;
    }
    .btn:hover {
      transform: scale(1.05);
    }
    .search-box {
      width: 100%;
      max-width: 500px;
      margin: 20px auto;
      padding: 12px 20px;
      font-size: 16px;
      border: 2px solid #e0e0e0;
      border-radius: 25px;
      outline: none;
      transition: border-color 0.3s;
    }
    .search-box:focus {
      border-color: #667eea;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>🚀 n8n Free Templates</h1>
      <p>200+ Ready-to-Import Workflows for Automation</p>
      <div class="stats">
        <div class="stat">
          <div class="stat-number">${catalog.totalTemplates}</div>
          <div class="stat-label">Templates</div>
        </div>
        <div class="stat">
          <div class="stat-number">${catalog.categories.length}</div>
          <div class="stat-label">Categories</div>
        </div>
      </div>
    </header>

    <main>
      <div class="intro">
        <h2>AI • Vector DB • LLM • DevOps • Finance • IoT • and more</h2>
        <p>Each workflow ships with docs, guard-rails, error alerts, and (when helpful) a full RAG stack.</p>
        <p style="margin-top: 10px;">
          <a href="https://github.com/sahiixx/n8n-free-templates" class="btn">View on GitHub</a>
        </p>
      </div>

      <input type="text" id="searchBox" class="search-box" placeholder="🔍 Search templates or categories...">

      <div class="categories" id="categoriesContainer">
        ${catalog.categories.map(cat => `
          <div class="category-card" data-category="${cat.name.toLowerCase()}">
            <div class="category-name">${cat.displayName}</div>
            <div class="category-count">${cat.templateCount} template${cat.templateCount > 1 ? 's' : ''}</div>
            <ul class="template-list">
              ${cat.templates.slice(0, 10).map(t => `<li>${t.replace('.json', '')}</li>`).join('')}
              ${cat.templates.length > 10 ? `<li><em>... and ${cat.templates.length - 10} more</em></li>` : ''}
            </ul>
          </div>
        `).join('')}
      </div>
    </main>

    <footer>
      <h3>🚀 Quick Start</h3>
      <p style="margin: 15px 0;">
        1. Clone the repo: <code>git clone https://github.com/sahiixx/n8n-free-templates.git</code><br>
        2. In n8n: Settings ▸ Import Workflows ▸ select any JSON<br>
        3. Configure credentials and activate ✅
      </p>
      <p style="margin-top: 20px; color: #666;">
        Generated: ${new Date(catalog.generated).toLocaleString()}
      </p>
    </footer>
  </div>

  <script>
    // Search functionality
    const searchBox = document.getElementById('searchBox');
    const categories = document.querySelectorAll('.category-card');

    searchBox.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      
      categories.forEach(card => {
        const categoryName = card.querySelector('.category-name').textContent.toLowerCase();
        const templates = Array.from(card.querySelectorAll('.template-list li')).map(li => li.textContent.toLowerCase());
        const matches = categoryName.includes(searchTerm) || templates.some(t => t.includes(searchTerm));
        
        card.style.display = matches ? 'block' : 'none';
      });
    });
  </script>
</body>
</html>`;

const indexPath = path.join(PUBLIC_DIR, 'index.html');
fs.writeFileSync(indexPath, htmlContent);
console.log(`✅ Index page generated: ${indexPath}`);

// Copy README to public directory
const mainReadmePath = path.join(ROOT_DIR, 'README.md');
if (fs.existsSync(mainReadmePath)) {
  fs.copyFileSync(mainReadmePath, path.join(PUBLIC_DIR, 'README.md'));
  console.log('✅ README.md copied to public directory');
}

console.log('\n✨ Build complete!');

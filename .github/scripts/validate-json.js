#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT_DIR = process.cwd();

console.log('🔍 Validating JSON files...\n');

let totalFiles = 0;
let validFiles = 0;
let invalidFiles = [];

function validateJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    JSON.parse(content);
    return true;
  } catch (error) {
    return { error: error.message };
  }
}

function scanDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    // Skip hidden directories and node_modules
    if (item.startsWith('.') || item === 'node_modules') {
      continue;
    }
    
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (item.endsWith('.json') && !item.includes('package')) {
      totalFiles++;
      const relativePath = path.relative(ROOT_DIR, fullPath);
      const result = validateJSON(fullPath);
      
      if (result === true) {
        validFiles++;
        console.log(`✅ ${relativePath}`);
      } else {
        invalidFiles.push({ path: relativePath, error: result.error });
        console.log(`❌ ${relativePath}`);
        console.log(`   Error: ${result.error}\n`);
      }
    }
  }
}

scanDirectory(ROOT_DIR);

console.log('\n' + '='.repeat(50));
console.log(`📊 Validation Summary:`);
console.log(`   Total files: ${totalFiles}`);
console.log(`   Valid: ${validFiles}`);
console.log(`   Invalid: ${invalidFiles.length}`);
console.log('='.repeat(50) + '\n');

if (invalidFiles.length > 0) {
  console.log('❌ Validation failed!\n');
  console.log('Invalid files:');
  invalidFiles.forEach(file => {
    console.log(`  - ${file.path}`);
    console.log(`    ${file.error}`);
  });
  process.exit(1);
} else {
  console.log('✅ All JSON files are valid!\n');
  process.exit(0);
}

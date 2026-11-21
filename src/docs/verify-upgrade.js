#!/usr/bin/env node

/**
 * Verification script for Next.js 15 + React 19 upgrade
 * Run with: node verify-upgrade.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Next.js 15 + React 19 upgrade...\n');

// Check package.json versions
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const { dependencies, devDependencies } = packageJson;

const expectedVersions = {
  'next': '^15.1.3',
  'react': '^19.0.0',
  'react-dom': '^19.0.0',
  'swiper': '^11.1.15',
  'framer-motion': '^11.15.0',
  'tailwindcss': '^3.4.17',
  'eslint': '^9.17.0'
};

console.log('📦 Checking package versions:');
let allVersionsCorrect = true;

Object.entries(expectedVersions).forEach(([pkg, expectedVersion]) => {
  const actualVersion = dependencies[pkg] || devDependencies[pkg];
  if (actualVersion === expectedVersion) {
    console.log(`✅ ${pkg}: ${actualVersion}`);
  } else {
    console.log(`❌ ${pkg}: expected ${expectedVersion}, got ${actualVersion || 'not found'}`);
    allVersionsCorrect = false;
  }
});

// Check configuration files
console.log('\n🔧 Checking configuration files:');
const configFiles = [
  'next.config.mjs',
  'tailwind.config.js',
  'postcss.config.mjs',
  'eslint.config.mjs'
];

configFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
    allVersionsCorrect = false;
  }
});

console.log(allVersionsCorrect ? '\n🎉 All checks passed!' : '\n⚠️  Some issues found');
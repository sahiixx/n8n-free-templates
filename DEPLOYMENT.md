# Deployment Guide

This document explains how the build and deployment system works for the n8n Free Templates repository.

## Overview

The repository uses GitHub Actions to automatically:
1. Validate all JSON template files
2. Generate a catalog of all templates
3. Build a static website
4. Deploy to GitHub Pages

## Architecture

```
┌─────────────────┐
│   Push to main  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  GitHub Actions │
│   (CI/CD)       │
└────────┬────────┘
         │
         ├─── Validate JSON files
         │
         ├─── Generate catalog
         │    └─ catalog.json
         │    └─ index.html
         │
         └─── Deploy to GitHub Pages
              └─ https://sahiixx.github.io/n8n-free-templates/
```

## GitHub Actions Workflow

The workflow is defined in `.github/workflows/build-and-deploy.yml` and consists of three jobs:

### 1. Validate Job
- Checks out the repository
- Validates all JSON files using `jq`
- Fails if any invalid JSON is found

### 2. Build Job
- Generates the catalog using `generate-catalog.js`
- Creates `public/catalog.json` with metadata
- Creates `public/index.html` with the website
- Uploads artifacts for deployment

### 3. Deploy Job
- Only runs on pushes to the `main` branch
- Deploys the `public` directory to GitHub Pages
- Makes the site available at the GitHub Pages URL

## Local Development

### Prerequisites
- Node.js 20 or higher

### Build Locally

```bash
# Install dependencies (none required for now)

# Validate all JSON files
npm run validate

# Build the catalog and website
npm run build

# The output will be in the public/ directory
# Open public/index.html in your browser
```

### Generated Files

After running `npm run build`, the following files are created in `public/`:

- **catalog.json** - JSON catalog of all templates with metadata
- **index.html** - Static website showcasing all templates
- **README.md** - Copy of the main README

## Enabling GitHub Pages

To enable GitHub Pages for your fork:

1. Go to repository Settings
2. Navigate to Pages section
3. Under "Build and deployment":
   - Source: GitHub Actions
4. The site will be deployed automatically on the next push to `main`

## Environment Variables

No environment variables or secrets are required for the build and deployment process.

## Monitoring Deployments

### Check Workflow Status
1. Go to the "Actions" tab in GitHub
2. Click on the latest workflow run
3. View logs for each job (Validate, Build, Deploy)

### View Deployment
- **Production URL**: `https://sahiixx.github.io/n8n-free-templates/`
- **Catalog API**: `https://sahiixx.github.io/n8n-free-templates/catalog.json`

## Troubleshooting

### Build Fails - Invalid JSON
If validation fails:
1. Check the GitHub Actions logs to see which file is invalid
2. Fix the JSON syntax error
3. Run `npm run validate` locally to verify
4. Commit and push the fix

### Build Fails - Script Error
If the build script fails:
1. Check the error message in GitHub Actions
2. Run `npm run build` locally to reproduce
3. Fix the issue in `.github/scripts/generate-catalog.js`
4. Test locally before pushing

### Deployment Fails
If deployment fails:
1. Check that GitHub Pages is enabled (see above)
2. Verify the workflow has `pages: write` permission
3. Check the deployment logs in GitHub Actions

## Manual Deployment

If you need to deploy manually:

```bash
# Build locally
npm run build

# The public/ directory contains the site
# You can deploy this to any static hosting service:
# - Netlify
# - Vercel
# - AWS S3
# - etc.
```

## Performance

- **Build time**: ~5-10 seconds
- **Deployment time**: ~30-60 seconds
- **Total workflow time**: ~1-2 minutes

## Future Enhancements

Possible improvements to the build/deploy system:

- [ ] Add search functionality to the catalog
- [ ] Generate API documentation
- [ ] Add template previews/screenshots
- [ ] Create RSS feed for new templates
- [ ] Add analytics tracking
- [ ] Generate OpenAPI spec for the catalog
- [ ] Add template validation beyond JSON syntax
- [ ] Create download stats tracking

---

_Last updated: 2024_

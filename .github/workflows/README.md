# GitHub Actions Workflows

## build-and-deploy.yml

This workflow automatically validates, builds, and deploys the n8n templates catalog.

### Triggers
- **Push to main**: Full validation, build, and deploy
- **Pull Request**: Validation and build only (no deploy)
- **Manual**: Can be triggered from Actions tab

### Jobs

#### 1. Validate (runs on all triggers)
- Checks out the repository
- Installs Node.js 20
- Validates all JSON files using `jq`
- Fails the workflow if any invalid JSON is found

**Why**: Ensures all template files are valid JSON before building.

#### 2. Build (runs after validate passes)
- Generates catalog metadata (`catalog.json`)
- Creates static website (`index.html`)
- Uploads artifacts for deployment

**Why**: Creates the browsable catalog website from the templates.

#### 3. Deploy (runs only on push to main)
- Deploys to GitHub Pages
- Makes the site available at: https://sahiixx.github.io/n8n-free-templates/

**Why**: Publishes the catalog for public access.

### Workflow Diagram

```
┌─────────────────┐
│  Push/PR/Manual │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Validate Job  │
│  ✓ Checkout     │
│  ✓ Setup Node   │
│  ✓ Check JSON   │
└────────┬────────┘
         │ (pass)
         ▼
┌─────────────────┐
│    Build Job    │
│  ✓ Generate     │
│    catalog      │
│  ✓ Create site  │
│  ✓ Upload       │
└────────┬────────┘
         │ (main only)
         ▼
┌─────────────────┐
│   Deploy Job    │
│  ✓ Publish to   │
│    GitHub Pages │
└─────────────────┘
```

### Permissions

The workflow requires:
- `contents: read` - Read repository files
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - OIDC token for Pages deployment

### Monitoring

Check workflow status:
1. Go to **Actions** tab
2. Click on the latest run
3. View logs for each job

### Troubleshooting

**Validate Job Fails**
- Check which JSON file is invalid
- Fix the syntax error
- Run `npm run validate` locally to verify

**Build Job Fails**
- Check the build script logs
- Test locally with `npm run build`
- Verify all categories have valid structure

**Deploy Job Fails**
- Ensure GitHub Pages is enabled in Settings
- Verify the workflow has correct permissions
- Check deployment logs

### Local Testing

Test the workflow steps locally:

```bash
# Step 1: Validate
npm run validate

# Step 2: Build
npm run build

# Step 3: Preview
# Open public/index.html in browser
```

### Configuration

No configuration required! The workflow automatically:
- Scans all category folders
- Finds all JSON templates
- Generates the catalog
- Deploys to GitHub Pages

### Performance

- **Validate**: ~30 seconds
- **Build**: ~5 seconds
- **Deploy**: ~30 seconds
- **Total**: ~1-2 minutes

---

_Updated: 2024_

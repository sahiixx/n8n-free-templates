# Contributing to n8n Free Templates

Thank you for your interest in contributing! 🎉

## How to Contribute

### Adding New Templates

1. **Fork the repository**
2. **Create a new branch** for your feature
3. **Add your template** to the appropriate category folder
4. **Update the category README** to list your template
5. **Test your changes** locally
6. **Submit a Pull Request**

### Template Guidelines

- Templates must be valid JSON files
- Use descriptive filenames (e.g., `customer_sentiment_analysis.json`)
- Place templates in the correct category folder
- Update the category's `README.md` with:
  - Template name
  - Technologies used (embeddings, vector stores, LLMs)

### Category Structure

```
Category_Name/
  ├── template1.json
  ├── template2.json
  └── README.md
```

### Testing Your Changes

Before submitting a PR, validate your JSON files:

```bash
npm run validate
```

Build and preview the catalog:

```bash
npm run build
```

Then open `public/index.html` in your browser.

## Development Workflow

### Prerequisites

- Node.js 20 or higher
- Git

### Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/n8n-free-templates.git
cd n8n-free-templates

# Create a new branch
git checkout -b feature/my-new-template

# Make your changes...

# Validate JSON files
npm run validate

# Build the catalog
npm run build

# Commit and push
git add .
git commit -m "Add new template: my_awesome_workflow"
git push origin feature/my-new-template
```

### Build and Deploy

The repository uses GitHub Actions for automated builds:

- **On Pull Request**: Validates JSON files and builds the catalog
- **On Push to Main**: Validates, builds, and deploys to GitHub Pages

The catalog is automatically deployed to: `https://sahiixx.github.io/n8n-free-templates/`

## Completing Incomplete Templates

Some templates are marked as incomplete. You can contribute by:

1. Finding incomplete templates (check category READMEs)
2. Adding missing nodes or configurations
3. Testing the workflow
4. Submitting a PR with your improvements

## Code of Conduct

- Be respectful and constructive
- Help others learn and grow
- Follow the project's style and conventions

## Questions?

Open an issue or start a discussion on GitHub!

---

_Made with ❤️ by the community_

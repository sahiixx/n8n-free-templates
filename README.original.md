# n8n-free-templates
# 🚀 200+ Ready-to-Import n8n Workflows  

_AI • Vector DB • LLM • DevOps • Finance • IoT • and more_

Free n8n templates to download

!!! Some of the templates are incomplete, you can be a contributor by completing it.
<p align="center">
  <img src="https://img.shields.io/badge/Templates-200-6A5ACD?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Categories-20%2B-008080?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Tech_Mix-Pinecone%2C_Weaviate%2C_Supabase%2C_Redis%2C_OpenAI%2C_Claude%2C_Cohere-FF69B4?style=for-the-badge" />
</p>

> **TL;DR** – Import any JSON workflow below into n8n and hit **Activate**.  
> Each one ships with docs, guard‑rails, error alerts, and (when helpful) a full **RAG** stack.

---

## 🔧 Tech Stack Matrix

| Layer | Options Used |
|-------|--------------|
| **Vector Stores** | Pinecone • Weaviate • Supabase Vector • Redis |
| **Embeddings** | OpenAI • Cohere • Hugging Face |
| **LLM Chat** | OpenAI GPT‑4(o) • Anthropic Claude 3 • Hugging Face Inference |
| **Memory** | Zep Memory • Window Buffer |
| **Extras** | Slack alerts • Google Sheets logs • OCR • HTTP polling |

---

## 📂 Folder Layout

```
<category>/
  *.json         # workflow files
  README.md      # tech mix per file

MASTER_README.md # ← you are here
```

---

## 🚀 Quick Start

```bash
git clone https://github.com/sahiixx/n8n-free-templates.git
# then in n8n:
# Settings ▸ Import Workflows ▸ select any JSON
# Open each node ▸ Credentials ▸ choose or create your account
# Save & Activate ✅
```

**🌐 Browse the catalog**: Visit the [live catalog website](https://sahiixx.github.io/n8n-free-templates/) to explore all templates with search functionality.

---

## 🏗️ Build & Deploy

This repository includes automated build and deployment:

- **Automatic validation** of all JSON templates on every push
- **Catalog generation** with searchable web interface  
- **GitHub Pages deployment** for easy browsing

### Local Development

```bash
# Validate all JSON files
npm run validate

# Build the catalog website
npm run build

# Output will be in public/ directory
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed information about the build and deploy system.

---

## 🤝 Contributing

You can contribute by adding more templates!
!!! Some of the templates are incomplete, you can be a contributor by completing it!!!

PRs & issues welcome!  
Request new templates, improve prompts, or add integrations.

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Collabs welcome!

---

_Made with ❤️ by Jay — "Automate everything, then automate the automation."_

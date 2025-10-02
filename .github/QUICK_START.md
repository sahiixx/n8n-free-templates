# Quick Start Guide

## For Users

### Browse Templates Online
Visit [https://sahiixx.github.io/n8n-free-templates/](https://sahiixx.github.io/n8n-free-templates/) to browse all templates with search functionality.

### Download and Use
1. Clone the repository:
   ```bash
   git clone https://github.com/sahiixx/n8n-free-templates.git
   ```

2. In n8n:
   - Go to **Settings** → **Import Workflows**
   - Select any `.json` file from the repository
   - Open each node and configure credentials
   - Save and activate!

## For Contributors

### Add a New Template
1. Fork the repository
2. Add your template JSON to the appropriate category folder
3. Update the category `README.md`
4. Run validation: `npm run validate`
5. Submit a Pull Request

### Test Locally
```bash
# Validate all templates
npm run validate

# Build the catalog website
npm run build

# Preview at public/index.html
```

## Tech Stack

- **Vector Stores**: Pinecone, Weaviate, Supabase Vector, Redis
- **Embeddings**: OpenAI, Cohere, Hugging Face
- **LLMs**: OpenAI GPT-4, Anthropic Claude 3, Hugging Face Inference
- **Automation**: n8n workflow platform

## Categories

- AI/ML
- Agriculture
- Automotive
- Creative Content
- Data Analytics
- DevOps
- E-Commerce/Retail
- Education
- Email Automation
- Energy
- Finance/Accounting
- Gaming
- Government/NGO
- HR
- Healthcare
- IoT
- Legal Tech
- Manufacturing
- Media
- Productivity
- Real Estate
- Social Media
- Travel
- Misc

## Support

- 📖 [Full Documentation](../README.md)
- 🤝 [Contributing Guide](../CONTRIBUTING.md)
- 🚀 [Deployment Info](../DEPLOYMENT.md)
- 🐛 [Report Issues](https://github.com/sahiixx/n8n-free-templates/issues)

---

_Happy Automating! 🚀_

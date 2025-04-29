# ⚡ SPEAR - Transform Ideas into Websites

## 🌟 Overview

**SPEAR-v2** is the next evolution of the SPEAR platform, a web-based tool that transforms simple prompts into fully functional websites. This version upgrades the backend to FastAPI with Python, enhances the frontend build process with Vite, and introduces containerization with Docker Compose, all while preserving the core idea-to-website workflow.

It's designed for developers, designers, and entrepreneurs who want to quickly prototype ideas and turn concepts into working websites.

---

## 🚀 Features

### 🧠 Prompt to Website

- Enter a natural language prompt like "create an e-commerce homepage" and watch as Gemini LLM generates the complete website code.

### ⚡ Live Website Preview

- Your generated website instantly comes to life in the browser using StackBlitz WebContainer.
- No deployments or server setups needed.

### ✍️ Code Editor

- Built-in editor lets you tweak and refine your website code with real-time updates.

### 📦 Download ZIP

- Export the complete project as a ZIP file to continue development in your preferred environment.

### 📁 Step View

- View a detailed breakdown of your website's components and understand how they work together.

---

## 💻 Tech Stack

| **Category**     | **Technology**                       |
| ---------------- | -------------------------------------|
| Frontend         | React, TypeScript, TailwindCSS, Vite |
| Animations       | Framer Motion                        |
| Backend          | FastAPI, Python                      |
| AI Integration   | Anthropic Claude 2.7 Sonnet          |
| Live Preview     | StackBlitz WebContainer              |
| Env Vars         | `.env` for Anthropic API             |
| Containerization | Docker, docker-compose               |

---

## 📥 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/LSG-hub/SPEAR-v2.git
   cd SPEAR-v2
   ```

2. **Setup environment variables**

   - In the `backend` directory, create a `.env` file:
     ```
     ANTHROPIC_API_KEY=your-anthropic-api-key
     ```

4. **Run the project**
   - Run docker-compose (Install Docker):
     ```bash
     docker-compose up
     ```


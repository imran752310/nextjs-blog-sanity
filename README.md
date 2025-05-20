# 🌐 MyWebsite

A modern, full-stack website built with **React**, **Next.js**, and **Tailwind CSS**, featuring elegant UI components via **shadcn/ui**, sleek icons from **lucide-react**, and a customizable **dark mode**. Content is managed dynamically with **Sanity CMS**.

---

## 🚀 Features

- ⚡️ Built with React + Next.js (App Router)
- 🎨 Tailwind CSS for utility-first styling
- 🧩 ShadCN UI components for clean design
- 🌗 Dark Mode toggle
- 🔗 Lucide Icons for modern iconography
- ✍️ Headless backend powered by Sanity CMS
- 📱 Fully responsive design
- 🔍 SEO optimized

---

## 📁 Project Structure

.
├── app/ # Next.js App Router pages
├── components/ # Reusable UI components (e.g., Button, Navbar)
├── lib/ # Utility functions (e.g., sanity config)
├── sanity/ # Sanity CMS configuration
├── public/ # Static files (e.g., images)
├── styles/ # Tailwind global styles
├── tailwind.config.js # TailwindCSS config
├── postcss.config.js # PostCSS config
├── next.config.js # Next.js config
└── README.md # Project readme

yaml
Copy
Edit

---

## 🛠️ Tech Stack

| Tech            | Description                                 |
|----------------|---------------------------------------------|
| **React**       | Frontend JavaScript library                 |
| **Next.js**     | Fullstack React framework                   |
| **Tailwind CSS**| Utility-first CSS framework                 |
| **shadcn/ui**   | Beautifully styled UI components            |
| **lucide-react**| Icon library with modern SVG icons          |
| **Sanity CMS**  | Headless CMS for content management         |
| **Dark Mode**   | Fully responsive and accessible theme switcher |

---

## 🧪 Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/yourprojectname.git
cd yourprojectname

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
Make sure to set up your Sanity project and add the correct config in lib/sanity.ts or .env.local

🧠 Sanity Setup
bash
Copy
Edit
# Install Sanity CLI globally
npm install -g sanity

# Init a new Sanity project (if not done already)
sanity init

# Start the Sanity Studio
cd sanity
sanity dev
Configure your Sanity dataset and connect it in your frontend using GROQ queries.

🌍 Deployment
Easily deploy to Vercel (recommended):

bash
Copy
Edit
# Install Vercel CLI (if not installed)
npm install -g vercel

# Deploy
vercel
📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Next.js

Tailwind CSS

ShadCN UI

Lucide Icons

Sanity CMS

Vercel


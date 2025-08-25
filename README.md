
# ShopSmart – Fullstack E-Commerce / ERP Demo

This project is a fullstack **Next.js 15 + TypeScript + TailwindCSS** frontend with an **Express + MongoDB** backend.  
It includes modules for **Products, Orders, Categories, Users**, and a modern **ERP-style Dashboard**.

---

## 🚀 Tech Stack
- **Frontend:** Next.js 15, TypeScript, TailwindCSS, shadcn/ui, Recharts
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Auth:** JWT-based authentication with Bearer tokens
- **Deployment:** Vercel (frontend), MongoDB Atlas (database), Render/Heroku/local (backend)

---

## 📂 Project Structure
ecomerce-fullstack/
├── app/ # Next.js app directory
│ ├── dashboard/ # ERP dashboard with stats + chart
│ ├── inventory/ # Inventory management
│ ├── orders/ # Orders list & status updates
│ ├── customers/ # Placeholder module
│ ├── products/ # Placeholder module
│ └── components/ # Reusable UI components (Navbar, Cards, etc.)
├── backend/ # Express API
│ ├── src/config/ # DB connection
│ ├── src/controllers # Controllers (products, orders, users)
│ ├── src/routes/ # Express routes
│ └── src/index.js # API entry point
├── lib/api.ts # Frontend API helper functions
├── .env.local # Frontend environment variables
├── .env # Backend environment variables
└── package.json

📦 Deployment

Frontend: Deploy to Vercel → .env.local → NEXT_PUBLIC_API_URL must point to backend URL

Backend: Deploy to Render/Heroku/any Node host with MongoDB Atlas connection

Database: MongoDB Atlas cluster

## 📸 Screenshots
### Dashboard
![Dashboard](https://raw.githubusercontent.com/ufaqkashif22/shopsmart-erp/main/public/screenshorts/dashboard.png)

### Ordes
![Orders](https://raw.githubusercontent.com/ufaqkashif22/shopsmart-erp/main/public/screenshorts/orders.png)


👨‍💻 Author
Ufaq Kashif
React Frontend Developer • Fullstack Enthusiast
# React + TypeScript + Vite — eCommerce Catalog

This project is a **React + TypeScript** template powered by **Vite**, built for creating a responsive e‑commerce catalog app. It offers a robust foundation with fast refresh, TypeScript linting, and a clean dev setup.

##  Live Demo  
[Explore the live version](https://react-ecommerce-catalog-alx.vercel.app)

---

##  Features

- React UI with Vite for blazing-fast builds and HMR  
- Complete TypeScript support for safe and scalable code  
- ESLint configuration, including sample suggestions for stricter linting  
- Easy integration with Vite plugins like `@vitejs/plugin-react` or `@vitejs/plugin-react-swc`

---

##  Getting Started

### Prerequisites

- Node.js (v14+) and npm (v7+), or Yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/Emmanuel-222/react-ecommerce-catalog-alx.git
cd react-ecommerce-catalog-alx

# Install dependencies
npm install
# or
yarn install
# Run server
npm run dev
# or
yarn dev
# Build for production
npm run build
# or
yarn build
```
### Project Structure
├── public/              # Static assets (images, favicon, etc.)
└── src/                 # Source files
    ├── App.tsx          # Main app component
    ├── index.html       # Entry HTML
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts   # Vite configuration

### ESLint Suggestions
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      // Or for stricter enforcement:
      // ...tseslint.configs.strictTypeChecked,
      // And optionally stylistic rules:
      // ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);


# 🎬 Movies List

A responsive web application built with **React** and **Vite** that allows users to browse and manage a list of movies using a modern UI. It demonstrates state management with React Context and reusable components like `MovieCard` and `NavBar`.

---

## 📌 Features

- 📚 View a list of movies with posters and descriptions
- 🔍 Search functionality to filter through movies
- 🎨 Clean and responsive UI using custom CSS
- ⚛️ Built with React functional components and Hooks
- 📁 Organized folder structure with separation of concerns

---


## 🛠️ Tech Stack

- **Frontend**: React.js (with Vite)
- **State Management**: React Context API
- **Styling**: Custom CSS
- **Bundler**: Vite

---

## 📁 Project Structure

```
Movies_List/
├── public/              # Static assets
│   └── vite.svg
├── src/
│   ├── assets/          # Image assets
│   │   └── react.svg
│   ├── components/      # Reusable UI components
│   │   ├── MovieCard.jsx
│   │   └── NavBar.jsx
│   ├── context/         # Global movie context
│   │   └── MovieContext.jsx
│   ├── css/             # Stylesheets
│   │   └── App.css
│   ├── App.jsx          # Main app layout
│   └── main.jsx         # Root render file
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

---

## 🖥️ Installation & Setup

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/prince01234/Movies_List.git
   cd Movies_List
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

---


## 🧠 Learning Objectives

- Master React component composition and props
- Understand and implement React Context API
- Learn how to set up projects using Vite for faster builds

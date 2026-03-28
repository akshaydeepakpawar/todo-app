# 🚀 Todo App

A modern full-stack Todo application built with a focus on clean architecture, scalability, and real-world development practices. This project demonstrates how to build a production-ready app using Next.js, React Query, Zustand, and MongoDB.

---

## 📌 Introduction

This Todo App allows users to manage their daily tasks efficiently with a clean and responsive interface.

### ✨ Key Features

* Create, delete, and manage todos
* Instant UI updates
* Automatic data synchronization with server
* Form validation using Zod
* State management using Zustand
* Data fetching and caching using React Query
* Backend powered by Next.js Server Actions and MongoDB

---

## 🏗️ Scalability & Architecture

This project is designed with scalability and maintainability in mind.

### 🔹 Separation of Concerns

* UI Layer → Components
* State Layer → Zustand
* Server State → React Query
* Backend Logic → Server Actions
* Database Layer → MongoDB + Mongoose

---

### 🔹 Server + Client Architecture (Next.js App Router)

* Server Components → data fetching and backend logic
* Client Components → UI interactions and hooks

---

### 🔹 State Management Strategy

* Zustand → local UI state (fast updates)
* React Query → server state (API + caching)

---

### 🔹 Query Key Pattern (Scalable Caching)

```js
todoKeys = {
  all: ["todo"],
  lists: () => ["todo", "list"],
};
```

---

### 🔹 Validation Layer

Zod ensures data consistency before saving to the database.

---

## 📁 Folder Structure

```bash
todo-app/
│
├── app/
├── components/
│   ├── TodoForm.jsx
│   ├── TodoList.jsx
│   └── TodoItem.jsx
├── hooks/
│   ├── useCreateTodo.js
│   ├── useDeleteTodo.js
├── store/
│   └── todo-store.js
├── actions/
│   └── todo-actions.js
├── lib/
│   └── db.js
├── model/
│   └── todo.js
├── validations/
│   └── todo.js
├── public/
└── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/akshaydeepakpawar/todo-app.git
cd todo-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create `.env.local`:

```
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run the project

```bash
npm run dev
```

### 5. Open in browser

```
http://localhost:3000
```

---

## 🧪 Best Practices & Notes

* Keep server and client logic separate
* Always return structured responses from server actions
* Use Zod for validation before database operations
* Maintain consistent naming (todos vs todo)
* Use React Query for server data and Zustand for UI state

---

## 🚀 Future Improvements

* Edit todo feature
* Filters (completed, pending)
* Authentication
* Mobile optimization
* Better UI/UX

---

## 🤝 Contributing

Feel free to fork the repo and submit pull requests. Suggestions are always welcome.

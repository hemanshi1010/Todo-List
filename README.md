# Todo-List

# 📝 React Animated Todo List

A modern and responsive **Todo List Application** built with **React.js**. This project allows users to add, edit, delete, and mark tasks as completed with smooth animations using **react-transition-group**. It demonstrates React fundamentals such as component-based architecture, state management, props, callback functions, controlled components, and one-way data flow.

---

## 🚀 Features

- ➕ Add new todos
- ✏️ Edit existing todos
- 🗑️ Delete todos
- ✅ Mark todos as completed
- 🎨 Smooth enter/exit animations
- 📱 Responsive user interface
- 🔄 Dynamic state updates using React
- 🆔 Unique IDs generated using UUID

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- CSS3
- HTML5
- react-transition-group
- uuid

---

## 📂 Project Structure

```
src/
│── App.js
│── TodoList.js
│── Todo.js
│── NewTodoForm.js
│── TodoList.css
│── Todo.css
│── NewTodoForm.css
└── index.js
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/react-animated-todo-list.git
```

### Navigate to project directory

```bash
cd react-animated-todo-list
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

The application will open at:

```
http://localhost:3000
```

---

## 📦 Dependencies

Install the required packages:

```bash
npm install react-transition-group uuid
```

---

## 🎯 Application Workflow

1. User enters a task.
2. **NewTodoForm** sends the task to **TodoList**.
3. **TodoList** stores all todos in its state.
4. Todos are displayed using the **Todo** component.
5. Users can:
   - Edit tasks
   - Delete tasks
   - Mark tasks as completed
6. React automatically re-renders the UI whenever the state changes.

---

## 🏗️ Component Architecture

```
                 App
                  │
                  ▼
             TodoList
          ┌──────────────┐
          │              │
          ▼              ▼
  NewTodoForm         Todo
                           │
                    Edit | Delete
                    Complete Todo
```

---

## 🔄 React Concepts Used

- Class Components
- State Management
- Props
- Callback Functions
- Controlled Components
- Event Handling
- Conditional Rendering
- List Rendering
- React Lifecycle
- One-Way Data Flow
- Component Reusability

---

## ✨ Animations

This project uses **react-transition-group** to provide:

- Fade-in animation while adding todos
- Slide-out animation while deleting todos
- Smooth transition while editing tasks

---

## 📸 Screenshots

Add screenshots of your application here.

Example:

```
screenshots/
    home.png
    add-task.png
    completed-task.png
```

---

## 🎓 Learning Outcomes

This project helped in understanding:

- React component architecture
- Parent-child communication
- Lifting state up
- Controlled forms
- Managing lists with state
- CRUD operations in React
- React animations
- UI state synchronization

---

## 🔮 Future Enhancements

- 🌙 Dark Mode
- 💾 Local Storage support
- 🔍 Search Todos
- 📂 Todo Categories
- 📅 Due Dates
- ⭐ Priority Levels
- 📱 Mobile-first improvements
- ☁️ Backend integration

---

## 👩‍💻 Author

**Hemanshi Nagar**

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to fork it!

Happy Coding! 🚀


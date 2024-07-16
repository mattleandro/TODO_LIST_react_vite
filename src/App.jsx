import React, { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";
import Search from "./Components/Search";
import Filter from "./Components/Filter";
import ModalForm from "./Components/ModalForm";
const App = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
        isEditing: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  const toggleEdit = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
  };

  const editTodoItem = (id, newValue) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            text: newValue.text,
            category: newValue.category,
            isEditing: false,
          }
        : todo
    );
    setTodos(updatedTodos);
    closeModal();
  };

  const openModal = (todo) => {
    setEditTodo(todo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditTodo(null);
  };

  return (
    <div className={`app ${isModalOpen ? "active-modal" : ""}`}>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todoProps={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              toggleEdit={toggleEdit}
              openModal={() => openModal(todo)}
            />
          ))}
      </div>

      <TodoForm onSubmit={addTodo} />

      {isModalOpen && (
        <div className="modal">
          <div className="overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <ModalForm
              edit={editTodo}
              onSubmit={editTodoItem}
              closeModal={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

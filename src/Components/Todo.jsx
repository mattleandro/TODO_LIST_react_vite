import React, { useState } from "react";

const Todo = ({
  todoProps,
  removeTodo,
  completeTodo,
  toggleEdit,
  editTodo,
  openModal,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleCompleteClick = () => {
    completeTodo(todoProps.id);
  };

  const handleEditClick = () => {
    if (todoProps.isCompleted) {
      setErrorMessage("Ative a tarefa para edita-la!");
    } else {
      setErrorMessage("");
      openModal();
    }
  };

  return (
    <>
      {errorMessage && (
        <div className="error-message">
          {errorMessage}
          <hr />
        </div>
      )}

      <div
        className="todo"
        style={{
          backgroundColor: todoProps.isCompleted ? "#5cb85c" : "white",
        }}
      >
        <div className="todo-text">{todoProps.text}</div>
        <div className="todo-category">{todoProps.category}</div>
        <div className="button-content">
          <button
            className={`complete-btn ${
              todoProps.isCompleted ? "complete" : ""
            }`}
            onClick={handleCompleteClick}
          >
            {todoProps.isCompleted ? "Abrir" : "Completar"}
          </button>
          <button className="edit-btn" onClick={handleEditClick}>
            Editar
          </button>
          <button className="remove" onClick={() => removeTodo(todoProps.id)}>
            Deletar
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;

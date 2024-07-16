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

  const handleEditClick = () => {
    if (todoProps.isCompleted) {
      setErrorMessage(
        "Não é possível editar uma tarefa concluída. Ative a tarefa para editá-la."
      );
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

      <div className={`todo ${todoProps.isCompleted ? "complete" : ""}`}>
        <div className="todo-text">{todoProps.text}</div>
        <div className="todo-category">{todoProps.category}</div>
        <div className="button-content">
          <button
            className={`complete-btn ${
              todoProps.isCompleted ? "complete" : ""
            }`}
            onClick={() => completeTodo(todoProps.id)}
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

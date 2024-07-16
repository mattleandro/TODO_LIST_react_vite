import React, { useState } from "react";

const ModalForm = ({ edit, onSubmit, closeModal }) => {
  const [value, setValue] = useState({
    text: edit.text,
    category: edit.category,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(edit.id, value);
    closeModal();
  };

  return (
    <>
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal-content">
        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            name="text"
            value={value.text}
            onChange={handleChange}
            placeholder="Editar título da tarefa"
            required
          />
          <input
            type="text"
            name="category"
            value={value.category}
            onChange={handleChange}
            placeholder="Editar categoria da tarefa"
            required
          />
          <button type="submit" className="todo-button">
            Atualizar Tarefa
          </button>
          <button className="close-modal" onClick={closeModal}>
            Fechar
          </button>
        </form>
      </div>
    </>
  );
};

export default ModalForm;

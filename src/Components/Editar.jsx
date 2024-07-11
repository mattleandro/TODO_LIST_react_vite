import { useState } from "react";

const Editar = ({ edit, onSubmit }) => {
  const [value, setValue] = useState({
    text: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(edit.id, value);
  };

  return (
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
    </form>
  );
};

export default Editar;

import { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input, category);
    setInput("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Adicionar nova tarefa"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Adicionar categoria"
        required
      />
      <button type="submit" className="todo-button">
        Adicionar Tarefa
      </button>
    </form>
  );
};

export default TodoForm;

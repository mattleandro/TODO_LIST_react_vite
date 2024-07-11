import Editar from "./Editar";

const Todo = ({
  todoProps,
  removeTodo,
  completeTodo,
  toggleEdit,
  editTodo,
}) => {
  return (
    <div
      className="todo"
      style={{
        backgroundColor: todoProps.isCompleted ? "grey" : "white",
        color: todoProps.isCompleted ? "white" : "black",
      }}
    >
      <div className="content">
        <p>{todoProps.text}</p>
        <p className="category">{todoProps.category}</p>
      </div>
      <div className="button-content">
        <button onClick={() => completeTodo(todoProps.id)} className="complete">
          {todoProps.isCompleted ? "Reabrir" : "Feito!"}
        </button>

        <button onClick={() => toggleEdit(todoProps.id)} className="edit-Btn">
          <div>Editar</div>
        </button>

        <button onClick={() => removeTodo(todoProps.id)} className="remove">
          X
        </button>
      </div>

      {todoProps.isEditing && <Editar edit={todoProps} onSubmit={editTodo} />}
    </div>
  );
};

export default Todo;

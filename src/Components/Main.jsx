import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Main() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Load todos from localStorage on component mount
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Synchronize localStorage with todos state
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = () => {
    if (todo.trim().length > 0) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo(""); // Clear input
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300); // Visual feedback
    }
  };

  const handleEdit = (id) => {
    const editableTodo = todos.find((item) => item.id === id);
    setTodo(editableTodo.todo); // Set input field to the selected todo
    setTodos(todos.filter((item) => item.id !== id)); // Remove from list
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id)); // Filter out the todo
  };

  const handleCheckBox = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
  };

  const handleInput = (e) => setTodo(e.target.value);

  return (
    <div className="flex justify-center items-center my-5 flex-col">
      <div className="flex gap-4">
        <input
          title="input"
          name="text"
          value={todo}
          className="px-2 rounded-md outline-none bg-blue-300 w-[20rem] h-9 font-roboto"
          type="text"
          onChange={handleInput}
        />
        <button
          className={`btn ${isClicked ? "bg-pink-500" : "bg-green-300"} `}
          onClick={addHandler}
          disabled={todo.trim().length === 0}
        >
          Save
        </button>
      </div>
      <div className="displayTodo my-10 bg-gray-400 min-h-[20rem] h-60 w-[35rem] rounded-md">
        <div className="font-roboto p-4 text-green-50 tracking-wide font-bold">
          Your TodoList
        </div>
        {todos.map((todoItem) => (
          <div
            key={todoItem.id}
            className="eachTodoContainer flex gap-4 px-4 m-4 items-center"
          >
            <input
              type="checkbox"
              name="checkbox"
              checked={todoItem.isCompleted}
              onChange={() => handleCheckBox(todoItem.id)}
              className="w-5 h-5 border-2 border-blue-400 bg-slate-400"
            />
            <div
              className={`todolist font-roboto h-9 rounded-2xl px-3 flex items-center w-[60%] bg-gray-300 ${
                todoItem.isCompleted ? "line-through" : ""
              }`}
            >
              {todoItem.todo}
            </div>
            <span className="flex gap-3 w-[30%]">
              <button
                className="btn bg-pink-500 text-white"
                onClick={() => handleEdit(todoItem.id)}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(todoItem.id)}
                className="btn bg-pink-700 text-white"
              >
                Delete
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Main() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isClicked, setIsClicked] = useState(false); // Track button click

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const addHandler = () => {
    setIsClicked(true); // Trigger class change
    setTimeout(() => {
      setIsClicked(false); // Revert after 500ms (if needed)
    }, 100);

    setTodos([...todos, { id: uuidv4(), todo, isComplited: false }]);
    setTodo("");
    console.log(todos.length);
  };

  return (
    <div className="flex justify-center items-center my-5 flex-col">
      <div className="flex gap-4">
        <input
          title="input"
          name="text"
          value={todo}
          className={
            "px-2 rounded-md outline-none bg-blue-300 w-[20rem] h-9 font-roboto"
          }
          type="text"
          onChange={handleInput}
        />
        <button
          className={`btn ${isClicked ? "bg-pink-500" : "bg-green-300"}`}
          onClick={addHandler}
        >
          Save
        </button>
      </div>
      <div className="displayTodo my-10">
        {todos.map(
          (
            todoItem // Use a descriptive variable name
          ) => (
            <div key={todoItem.id} className="eachTodoContainer flex gap-4 my-5">
              {" "}
              <div className="todolist font-roboto"> {todoItem.todo} </div>
              <span className="flex gap-3">
                <button
                  className={`btn ${
                    isClicked ? "bg-pink-500" : "bg-green-300"
                  }`}
                >
                  Edit
                </button>
                <button
                  className={`btn ${
                    isClicked ? "bg-pink-500" : "bg-green-300"
                  }`}
                >
                  Delete
                </button>
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Main;

import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, changeTodo, clearCompleted } from "./todoSlice";
import { useState } from "react";
export function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div className="App">
      <div className="todoName">TODO LIST</div>

      {/* todoForm */}
      <form
        className="todoForm"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo({ text }));
          setText("");
        }}
      >
        <input
          required
          className=" min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2  ring-2 ring-inset  focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm "
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className=" ml-1 cursor-pointer inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Add
        </button>
      </form>
      {/* {todoList} */}
      <div className=" ">
        {todos.map((todo) => {
          return (
            <div className="text-justify text-4xl" key={todo.id}>
              <label >
                <input
                  className=" mr-5 h-7 w-5 cursor-pointer"
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={(e) => {
                    dispatch(
                      changeTodo({ ...todo, isCompleted: e.target.checked })
                    );
                  }}
                />
              </label>
              {todo.text}
              <div className="relative  left-20 bottom-11 ml-5 text-end">
                <button
                  className="  ml-40  w-13 h-8 cursor-pointer  text-base inline-flex items-center rounded-md bg-indigo-600 px-3 py-2  font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  // onClick={() => handleRemoveTodo(todo.id)}
                  onClick={() => dispatch(deleteTodo(todo))}
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* todoFooter */}
      <div>
        <span className="  text-2xl">
          {todos.filter((todo) => todo.isCompleted).length}/{todos.length}{" "}
          Completed
        </span>
        <button
          className=" my-3 ml-1.5 cursor-pointer inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => {
            dispatch(clearCompleted(todos));
          }}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

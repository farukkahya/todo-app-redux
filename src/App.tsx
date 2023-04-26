import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/stores/hooks.ts";
import { add, allCompleted, deleteAll, deleteCompleted } from "./redux/features/todoSlice.ts";
import TodoItem from "./components/Todo/index.tsx";
import { GoPlus } from "react-icons/go";
import { RiTodoFill } from "react-icons/ri";

function App() {
  const todos = useAppSelector((state) => state.todos);
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();
  const onSave = () => {
    dispatch(add(title));
    setTitle("");
  };
  const deleteComp = () =>{
    dispatch(deleteCompleted())
  }
  const compAll = () => {
    dispatch(allCompleted())
  }
  const deleteAllTodos = () => {
    dispatch(deleteAll())
  }
  return (
    <main>
      <h1> <RiTodoFill/> <span>Mars TODO</span></h1>
      <div className="todo-form">
        <input
          className="todo-input"
          type="text"
          name={"title"}
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <button className="addBtn" onClick={onSave}>
          <GoPlus size={30} />
        </button>
      </div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <div className="todo-footer">
        <button className="deleteCompletedBtn" onClick={deleteComp}>Delete Completed</button>
        <button className="complateAllBtn" onClick={compAll}>Complete All</button>
        <button className="deleteAllBtn" onClick={deleteAllTodos}>Delete All</button>
      </div>
    </main>
  );
}

export default App;

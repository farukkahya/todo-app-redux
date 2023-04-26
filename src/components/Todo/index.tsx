import './styles.css'
import { completed, remove } from "../../redux/features/todoSlice";
import { useAppDispatch } from "../../redux/stores/hooks";
import {Todo} from "../../redux/features/todoSlice"
import { AiFillDelete } from "react-icons/ai";
type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }:Props) => {
  const dispatch = useAppDispatch();

  const isCompleted = (id: string) => {
    dispatch(completed(id));
  };
  const onRemove = (id: string) => {
    dispatch(remove(id));
};

  return (
    <div className="todoContainer">
      <input type="checkbox" checked={todo.completed} onChange={()=> isCompleted(todo.id)} />
      <span id='todoTitle' style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.title}</span>
      <button id='deleteBtn' onClick={()=> onRemove(todo.id)}><AiFillDelete size={25}/></button>
    </div>
  );
};

export default TodoItem;

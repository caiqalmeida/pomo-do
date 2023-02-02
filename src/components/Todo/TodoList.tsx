import { ITodoItem } from "../../types";

import ToDoItem from "./TodoItem";
import { MouseEvent } from "react";

interface Props {
  items: ITodoItem[];
  onToggleDone: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
}

const ToDoList = ({ items, onToggleDone }: Props) => {
  return (
    <>
      {items.map((item) => (
        <ToDoItem key={item.id} item={item} onToggleDone={onToggleDone} />
      ))}
    </>
  );
};

export default ToDoList;

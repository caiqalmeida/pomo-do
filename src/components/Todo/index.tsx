import { TodoContextProvider } from "contexts/todo";
import TodoWrapper from "./TodoWrapper";

const TodoContainer = () => {
  return (
    <TodoContextProvider>
      <TodoWrapper />
    </TodoContextProvider>
  );
};

export default TodoContainer;

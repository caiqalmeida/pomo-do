import { createContext, ReactNode, useContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface TodoContextType {
  focusMode: boolean;
  focusedItemId: number | null;
  handleFocusModeOn: (id: number) => void;
  handleFocusModeOff: () => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);
TodoContext.displayName = "TodoContext";

const TodoContextProvider = ({ children }: ProviderProps) => {
  const [focusMode, setFocusMode] = useState(false);
  const [focusedItemId, setFocusedItemId] = useState<null | number>(null);

  const handleFocusModeOn = (id: number) => {
    setFocusedItemId(id);
    setFocusMode(true);
  };

  const handleFocusModeOff = () => {
    setFocusedItemId(null);
    setFocusMode(false);
  };

  const value = {
    focusMode,
    focusedItemId,
    handleFocusModeOn,
    handleFocusModeOff,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodo must be use within a Todo");
  }
  return context;
};

export { TodoContextProvider, useTodo };

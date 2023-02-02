import { useState, MouseEvent } from "react";
import { Heading, Box, Button } from "@chakra-ui/react";

import { useTodo } from "contexts/todo";
import { ITodoItem } from "types";
import ToDoItem from "./TodoItem";
import ToDoList from "./TodoList";

const mockedItems = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit in, sed harum voluptatem natus totam tenetur asperiores consequuntur atque quam. At ratione nam hic quam alias modi quos non consectetur!",
    done: true,
  },
  {
    id: 2,
    title: "Do something 2",
    done: false,
  },
  {
    id: 3,
    title: "Do something 3",
    done: true,
  },
  {
    id: 4,
    title: "Do something 4",
    done: false,
  },
];

const TodoWrapper = () => {
  const [items, setItems] = useState(mockedItems);
  const { focusMode, handleFocusModeOff, focusedItemId } = useTodo();

  const handleToggleDone = (
    event: MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.stopPropagation();
    const newItems = items.map((item: ITodoItem) =>
      item.id === id ? { ...item, done: !item.done } : item
    );

    setItems(newItems);
  };

  const focusedItem =
    items.find((item) => item.id === focusedItemId) || undefined;

  return (
    <Box
      bg="purple.500"
      mt={12}
      p={8}
      borderRadius="lg"
      display="flex"
      flexDirection="column"
    >
      {focusMode && (
        <Button
          position="absolute"
          variant="outline"
          onClick={() => handleFocusModeOff()}
        >
          X
        </Button>
      )}
      <Heading size="2xl" textAlign="center" color="purple.700" mb="8">
        {focusMode ? "Doing" : "Do"}
      </Heading>

      {focusMode && focusedItem && (
        <ToDoItem item={focusedItem} onToggleDone={handleToggleDone} />
      )}
      {!focusMode && <ToDoList items={items} onToggleDone={handleToggleDone} />}
    </Box>
  );
};

export default TodoWrapper;

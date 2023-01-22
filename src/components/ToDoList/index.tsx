import { MouseEvent, useState } from "react";
import { Heading, Box, Button } from "@chakra-ui/react";

import ToDoItem from "./ToDoItem";

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

const ToDoList = () => {
  const [items, setItems] = useState(mockedItems);
  const [filtredItems, setFiltredItems] = useState(mockedItems);
  const [focusMode, setFocusMode] = useState(false);

  const handleToggleDone = (
    event: MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.stopPropagation();
    const newItems = items.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    console.log("newItems", newItems);

    setItems(newItems);
  };

  const handleFocusModeOn = (id: number) => {
    setFiltredItems(items.filter((item) => item.id === id));
    setFocusMode(true);
  };

  const handleFocusModeOff = () => {
    setFiltredItems(items);
    setFocusMode(false);
  };

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

      {filtredItems.map((item) => (
        <ToDoItem
          key={item.id}
          item={item}
          onToggleDone={handleToggleDone}
          onFocusModeOn={handleFocusModeOn}
        />
      ))}
    </Box>
  );
};

export default ToDoList;

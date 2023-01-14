import { Heading, Box } from "@chakra-ui/react";
import { useState } from "react";

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

  const handleToggleDone = (id: number) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );

    setItems(newItems);
  };

  return (
    <Box bg="purple.500" mt={12} p={8} borderRadius="lg">
      <Heading size="2xl" textAlign="center" color="purple.700" mb="8">
        Do
      </Heading>

      {items.map((item) => (
        <ToDoItem key={item.id} item={item} onToggle={handleToggleDone} />
      ))}
    </Box>
  );
};

export default ToDoList;

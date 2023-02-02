import { MouseEvent } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { AiFillCheckCircle as CheckIcon } from "react-icons/ai";

import { ITodoItem } from "../../types";
import { useTodo } from "contexts/todo";

interface Props {
  item: ITodoItem;
  onToggleDone: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
}

const ToDoItem = ({ item, onToggleDone }: Props) => {
  const { handleFocusModeOn } = useTodo();

  return (
    <Box
      bg="purple.600"
      borderRadius="md"
      w="100%"
      mt="4"
      p="4"
      display="flex"
      alignItems="center"
      color={item?.done ? "#553C9A" : "#fefefe"}
      onClick={() => handleFocusModeOn(item.id)}
      cursor="pointer"
    >
      <Button
        onClick={(event) => {
          onToggleDone(event, item.id);
        }}
        variant="ghost"
        p="0"
      >
        <CheckIcon fontSize={30} style={{ cursor: "pointer" }} />
      </Button>
      <Text size="lg" ml="4" textDecoration={item.done ? "line-through" : ""}>
        {item.title}
      </Text>
    </Box>
  );
};

export default ToDoItem;

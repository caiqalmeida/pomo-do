import { Box, Text, Button } from "@chakra-ui/react";
import { MouseEvent } from "react";
import { AiFillCheckCircle as CheckIcon } from "react-icons/ai";

interface ToDoItemProps {
  item: {
    id: number;
    title: string;
    done: boolean;
  };
  onFocusModeOn: (id: number) => void;
  onToggleDone: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
}

const ToDoItem = ({ item, onToggleDone, onFocusModeOn }: ToDoItemProps) => {
  console.log("item.id", item.id);
  console.log("item.done", item.done);
  return (
    <Box
      bg="purple.600"
      borderRadius="md"
      w="100%"
      mt="4"
      p="4"
      display="flex"
      alignItems="center"
      color={item.done ? "#553C9A" : "#fefefe"}
      onClick={() => onFocusModeOn(item.id)}
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

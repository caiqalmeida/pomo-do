import { Box, Text } from "@chakra-ui/react";
import { AiFillCheckCircle as CheckIcon } from "react-icons/ai";

interface ToDoItemProps {
  item: {
    id: number;
    title: string;
    done: boolean;
  };
  onToggle: (id: number) => void;
}

const ToDoItem = ({ item, onToggle }: ToDoItemProps) => {
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
    >
      <Box>
        <CheckIcon
          fontSize={30}
          style={{ cursor: "pointer" }}
          onClick={() => onToggle(item.id)}
        />
      </Box>
      <Text size="lg" ml="4" textDecoration={item.done ? "line-through" : ""}>
        {item.title}
      </Text>
    </Box>
  );
};

export default ToDoItem;

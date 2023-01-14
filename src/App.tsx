import { ChakraProvider, Box } from "@chakra-ui/react";

import PomodoroTimer from "components/PomodoroTimer";
import ToDoList from "components/ToDoList";

function App() {
  return (
    <ChakraProvider>
      <Box bg="whiteAlpha.900" w="100%" minH="100vh" color="whiteAlpha.800">
        <Box p={4} w="80%" maxW="750px" m="auto">
          <PomodoroTimer />
          <ToDoList />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

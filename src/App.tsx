import { ChakraProvider, Box } from "@chakra-ui/react";

import PomodoroTimer from "components/PomodoroTimer";
import Todo from "components/Todo";

function App() {
  return (
    <ChakraProvider>
      <Box bg="whiteAlpha.900" w="100%" minH="100vh" color="whiteAlpha.800">
        <Box p={4} w="80%" maxW="750px" m="auto">
          <PomodoroTimer />
          <Todo />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

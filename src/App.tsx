import { ChakraProvider } from "@chakra-ui/react";

import PomodoroTimer from "components/PomodoroTimer";

function App() {
  return (
    <ChakraProvider>
      <PomodoroTimer />
    </ChakraProvider>
  );
}

export default App;

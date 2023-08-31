
import './App.css';
import Todotest from './components/Todotest';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
      <Todotest></Todotest>
    </ChakraProvider>
    
  );
}

export default App;

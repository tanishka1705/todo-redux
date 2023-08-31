import { Box, Button, Container, FormControl, HStack, Heading, Input, ListItem, UnorderedList, Icon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditTodo from "./EditTodo";

const Todotest = () => {
    const [item, setItem] = useState("");
    const items = useSelector(state => state);
    const dispatch = useDispatch();
   


    const inputHandler = (e) => {
        setItem(e.target.value);
    }

    const addItemHandler = (e) => {
        e.preventDefault();
        dispatch({ type: 'addItem', payload: item });
        setItem("");
    }

    const deleteHandler = (index) => {
        dispatch({ type: 'deleteItem', payload: index });
    }


    return (
        <Container>
            <Heading textAlign='center' mt={50}>Todo List App</Heading>
            <form onSubmit={addItemHandler}>
                <FormControl mt={10} bg='#F5F5F5' p={10} borderRadius={5}>
                    <HStack spacing={5}>
                        <Input type="text" placeholder=" Enter Item..." onChange={inputHandler} value={item}></Input>
                        <Button type="submit" color={"white"} colorScheme="green">Add Item</Button>
                    </HStack>
                </FormControl>
            </form>

            {items.length > 0 && (
                <Box mt={30} bg='#36454f' p={5} borderRadius={3}>

                    <UnorderedList ml={0}>

                        {items.map((item, index) =>
                            <ListItem color='white' border='1px solid' mb={2} p={5} borderRadius={3} listStyleType={"none"}
                                key={index}>
                                <HStack justifyContent="space-between" width="100%">
                                    <Box>{item}</Box>
                                    <HStack>

                                        <EditTodo
                                            item={item}
                                            index={index}
                                            onDelete={(index) => deleteHandler(index)}
                                        />
                                    </HStack>

                                </HStack>
                            </ListItem>)}

                    </UnorderedList>

                </Box>
            )}
        </Container>
    );
}

export default Todotest;

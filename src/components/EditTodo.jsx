import { Box, Button, FormControl, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useState, useEffect} from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function EditTodo({ item, index, onDelete }) {
    const [editedItem, setEditedItem] = useState(item);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    const editInputHandler = (e) => {
        setEditedItem(e.target.value);
    };


    const saveHandler = () => {
    
        dispatch({
            type: 'editItem',
            payload: {
                index: index,
                editedValue: editedItem
            }
        });
        setIsModalOpen(false);
    };

    useEffect(() => {
        setEditedItem(item);
    }, [item]);


    return (
        <Box>
            <Button onClick={() => setIsModalOpen(true)} leftIcon={<FaEdit />} size="sm" borderRadius={90} iconSpacing={0.1} colorScheme="teal"></Button>
            <Button onClick={() => onDelete(index)} leftIcon={<FaTrash />} ml={2} size="sm" colorScheme="red" borderRadius={90} iconSpacing={0.1}></Button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Item</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>  
                            <Input onChange={editInputHandler} value={editedItem} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={saveHandler}>
                            Save
                        </Button>
                        <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default EditTodo;

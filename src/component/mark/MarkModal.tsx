import React from "react";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea
} from "@chakra-ui/react";

interface MarkModalProps {
    isOpen: boolean,
    onClose: () => void,
    title?: string,
    text?: string,
    handleAction: (o: any) => void
}

const MarkModal = ({isOpen, onClose, title, text, handleAction}: MarkModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Create your mark</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input
                            placeholder='Title'
                            onChange={event => {
                                title = event.target.value
                            }}
                            value={title}
                        />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Text</FormLabel>
                        <Textarea
                            placeholder='Text'
                            resize='none'
                            onChange={event => {
                                text = event.target.value
                            }}
                            value={text}
                        />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button
                        onClick={() => {
                            handleAction({title, text})
                            onClose()
                        }}
                        size='lg'
                        variant='outline'
                    >
                        Mark
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default MarkModal
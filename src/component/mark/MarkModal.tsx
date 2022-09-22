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
    title: string
    text: string
    isOpen: boolean
    onClose: () => void,
    handleAction: (o: any) => void
    handleTitle: (e: any) => void
    handleText: (e: any) => void
}

const MarkModal = ({title, text, isOpen, onClose, handleAction, handleTitle, handleText}: MarkModalProps) => {
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
                            onChange={handleTitle}
                            value={title}
                        />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Text</FormLabel>
                        <Textarea
                            placeholder='Text'
                            resize='none'
                            onChange={handleText}
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
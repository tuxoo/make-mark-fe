import React, {useState} from "react";
import {Divider, Flex, GridItem, IconButton, Text, useDisclosure} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import moment from "moment";
import {useAppDispatch} from "../../hook/redux";
import {deleteMark, editMark} from "../../store/slice/mark";
import MarkModal from "./MarkModal";
import {MarkForm} from "../../service/mark.service";

interface MarkProps {
    id: string,
    title: string,
    text: string,
    time: string
}

const Mark = ({id, title, text, time}: MarkProps) => {
    const dispatch = useAppDispatch()
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [newTitle, setNewTitle] = useState(title)
    const [newText, setNewText] = useState(text)

    const handleEdit = async (mark: MarkForm) => {
        await dispatch(editMark({id, mark}))
    }

    return (
        <GridItem colSpan={1} w='full' h='full' bg='transparent'>
            <Flex
                direction='column'
                width='460px'
                bgColor='white'
                boxShadow='xl'
                p={4}
                rounded={10}
                shadow='2xl'
                userSelect='none'
            >
                <Text as='b' pl='4'>{title}</Text>
                <Text p='2'>{text}</Text>
                <Divider/>
                <Flex width='full' h='full' justifyContent='space-between'>
                    <Flex width='80%' h='12' alignItems='center'>
                        <Text as='em' pl='2'>
                            {moment(time).format('LT')}
                        </Text>
                    </Flex>
                    <Flex width='10%' h='full'>
                        <IconButton
                            onClick={() => {
                                setNewTitle(title)
                                setNewText(text)
                                onOpen()
                            }
                            }
                            aria-label='Edit Mark'
                            icon={<EditIcon/>}
                            bg='transparent'
                            size='lg'
                            color='gray.500'/>
                        <MarkModal
                            title={newTitle}
                            text={newText}
                            isOpen={isOpen}
                            onClose={onClose}
                            handleAction={handleEdit}
                            handleTitle={event => {
                                setNewTitle(event.target.value)
                            }}
                            handleText={event => {
                                setNewText(event.target.value)
                            }}
                        />
                    </Flex>
                    <Flex width='10%' h='full'>
                        <IconButton
                            onClick={() => {
                                dispatch(deleteMark(id))
                            }}
                            aria-label='Delete Mark'
                            icon={<DeleteIcon/>}
                            bg='transparent'
                            size='lg'
                            color='gray.500'/>
                    </Flex>
                </Flex>
            </Flex>
        </GridItem>
    )
}

export default Mark
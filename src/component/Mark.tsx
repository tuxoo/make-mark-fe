import React from "react";
import {Flex, IconButton, Text} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";

interface MarkProps {
    title: string,
    text: string,
    time: string
}

const Mark = ({title, text, time}: MarkProps) => {
    return (
        <Flex
            direction='column'
            width='480px'
            bgColor='white'
            boxShadow='xl'
            p={4}
            rounded={10}
            shadow='2xl'
        >
            <Text as='b'>{title}</Text>
            <Text>{text}</Text>
            <Flex width='full' h='full' p='1'>
                <Flex width='80%' h='12' justifyContent='start' alignItems='center'>
                    <Text as='em'>
                        {time}
                    </Text>
                </Flex>
                <Flex width='10%' h='full' justifyContent='end'>
                    <IconButton
                        aria-label='Edit Mark'
                        icon={<EditIcon/>}
                        bg='transparent'
                        size='lg'
                        color='gray.500'/>
                </Flex>
                <Flex width='10%' h='full' justifyContent='end'>
                    <IconButton
                        aria-label='Delete Mark'
                        icon={<DeleteIcon/>}
                        bg='transparent'
                        size='lg'
                        color='gray.500'/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Mark
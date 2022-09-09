import React from "react";
import {Flex, Text} from "@chakra-ui/react";

interface LabelProps {
    text: string
}

const Title = ({text}: LabelProps) => {
    return (
        <Flex
            as='b'
            h='full'
            width='full'
            fontSize='2xl'
            fontFamily='bold'
            justifyContent='center'
            alignItems='center'
            userSelect='none'
            p='4'
        >
            <Text>{text}</Text>
        </Flex>
    )
}

export default Title
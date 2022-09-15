import React from "react";
import {Flex, Text} from "@chakra-ui/react";

interface LoginTextProps {
    text: string
}

const LoginText = ({text}: LoginTextProps) => {
    return (
        <Flex
            h='full'
            width='full'
            justifyContent='center'
            alignItems='center'
            userSelect='none'
            p='4'
        >
            <Text>{text}</Text>
        </Flex>
    )
}

export default LoginText
import {Box} from "@chakra-ui/react";
import React from "react";

interface LoginButtonProps {
    text: string
}

const LoginButton = ({text}: LoginButtonProps) => {
    return (
        <Box
            as='button'
            width='40'
            height='12'
            bg='transparent'
            border='1px'
            borderColor='gray.200'
            justifyContent='center'
            rounded='8'
            userSelect='none'
            _hover={{
                border: `2px`,
                borderColor: `#3182CE`
            }}
            _active={{
                border: `2px`,
                borderColor: `#3182CE`,
                transform: 'scale(0.95)',
            }}
        >
            {text}
        </Box>
    )
}

export default LoginButton
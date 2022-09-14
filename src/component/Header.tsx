import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";

const Header = () => {
    return (
        <Flex
            h='50'
            width='full'
            justifyContent='start'
            alignItems='center'
            userSelect='none'
        >
            <Text
                p='2'
            >
                MakeMark
            </Text>
        </Flex>
    )
}

export default Header
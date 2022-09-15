import React from "react";
import {Flex, Img} from "@chakra-ui/react";

interface LabelProps {
    path: string
}

const Label = ({path}: LabelProps) => {
    return (
        <Flex
            h='full'
            width='full'
            justifyContent='center'
            alignItems='center'
            userSelect='none'
            p='2'
        >
            <Img
                src={path}
                alt=''/>
        </Flex>
    )
}

export default Label
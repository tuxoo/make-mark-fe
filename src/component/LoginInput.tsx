import React from "react";
import {FormControl, FormLabel, Input} from "@chakra-ui/react";

interface LoginInputProps {
    label: string,
    type: string
}

const LoginInput = ({label, type}: LoginInputProps) => {
    return (
        <FormControl p = '3'>
            <FormLabel>{label}</FormLabel>
            <Input
                size='md'
                type={type}
            />
        </FormControl>
    )
}
export default LoginInput
import React from "react";
import {FormControl, FormLabel, Input} from "@chakra-ui/react";
import {toCamelCase} from "../../util/Utils";

interface LoginInputProps {
    label: string,
    type: string,
    handle: (e: any) => void
}

const LoginInput = ({label, type, handle}: LoginInputProps) => {
    return (
        <FormControl p='1'>
            <FormLabel>{label}</FormLabel>
            <Input
                size='md'
                type={type}
                name={toCamelCase(label)}
                onChange={handle}
            />
        </FormControl>
    )
}
export default LoginInput
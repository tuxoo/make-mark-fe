import React from "react";
import {ArrowUpDownIcon} from "@chakra-ui/icons";
import {IconButton} from "@chakra-ui/react";

interface SortButtonProps {
    handle: (e: any) => void
}

const SortButton = ({handle}: SortButtonProps) => {
    return (
        <IconButton
            onClick={handle}
            aria-label='Delete Mark'
            icon={<ArrowUpDownIcon/>}
            bg='transparent'
            size='sm'
            color='gray.500'
            _hover={{
                color: 'blackAlpha.700'
            }}
            _active={{
                transform: 'scale(0.9)'
            }}
        />
    )
}

export default SortButton
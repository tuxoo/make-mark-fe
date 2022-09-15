import React from "react";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex} from "@chakra-ui/react";
import {ArrowForwardIcon, ChevronRightIcon} from "@chakra-ui/icons";

interface MarkHeaderProps {
    year: number,
    month: string,
    day: number
}

const MarkHeader = ({year, month, day}: MarkHeaderProps) => {
    return (
        <Flex
            direction='column'
            width='full'
            h='full'
            justifyContent='end'
            alignContent='center'
            userSelect='none'
        >
            <Flex
                width='full'
                bgColor='white'
                alignItems='center'
                justifyContent='space-between'
                p={2}
                rounded={10}
                shadow='2xl'
                pl='4'
                pr='4'
                userSelect='none'
            >
                <Breadcrumb spacing='10px' separator={<ChevronRightIcon color='gray.500'/>}>
                    <BreadcrumbItem>
                        <BreadcrumbLink>{year}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>{month}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink>{day}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Button rightIcon={<ArrowForwardIcon />} size='lg' variant='outline'>
                    Make
                </Button>
            </Flex>
        </Flex>
    )
}

export default MarkHeader
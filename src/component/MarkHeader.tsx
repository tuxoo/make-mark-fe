import React from "react";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";

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
        >
            <Flex
                width='full'
                bgColor='white'
                p={4}
                rounded={10}
                shadow='2xl'
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
            </Flex>
        </Flex>
    )
}

export default MarkHeader
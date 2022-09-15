import React from "react";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Grid,
    GridItem,
    Icon,
    IconButton,
    Text
} from "@chakra-ui/react";
import {ChevronRightIcon, DeleteIcon, EditIcon} from '@chakra-ui/icons'
import Mark from "../component/Mark";
import MarkHeader from "../component/MarkHeader";

const Marks = () => {
    return (

            <Flex minHeight='95vh' width='full' align='start' justifyContent='center'>
                <Grid
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(2, 1fr)'
                    gap={2}
                >
                    <GridItem colSpan={2} w='full' h='full' bg='transparent'>
                        <MarkHeader year={2022} month={'September'} day={15}/>
                    </GridItem>
                    <GridItem colSpan={1} w='full' h='full' bg='transparent'>
                        <Mark title={'Title'} text={'Some text'} time={'12:05'}/>
                    </GridItem>
                    <GridItem colSpan={1}  w='full' h='full' bg='transparent'>
                        <Mark title={'Title'} text={'Some text'} time={'13:24'}/>
                    </GridItem>
                    <GridItem colSpan={1}  w='full' h='full' bg='transparent'>
                        <Mark title={'Title'} text={'Some text'} time={'17:52'}/>
                    </GridItem>
                </Grid>
            </Flex>

    )
}

export default Marks
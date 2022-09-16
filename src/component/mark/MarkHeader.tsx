import React from "react";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, useDisclosure} from "@chakra-ui/react";
import {ArrowForwardIcon, ChevronRightIcon} from "@chakra-ui/icons";
import MarkModal from "./MarkModal";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {addMark} from "../../store/slice/mark";
import {MarkForm} from "../../service/mark.service";
import {markModalActions} from "../../store/slice/mark-model/slice";

interface MarkHeaderProps {
    year: number,
    month: string,
    day: number
}

const MarkHeader = ({year, month, day}: MarkHeaderProps) => {
    const dispatch = useAppDispatch()

    const {isOpen, onOpen, onClose} = useDisclosure()
    const {title, text} = useAppSelector(state => state.markModalReducer)

    const handleAdd = async (mark: MarkForm) => {
        await dispatch(addMark(mark))
    }

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

                <Button
                    onClick={onOpen}
                    rightIcon={<ArrowForwardIcon/>}
                    size='lg'
                    variant='outline'
                >
                    Make
                </Button>
                <MarkModal
                    isOpen={isOpen}
                    onClose={onClose}
                    handleAction={handleAdd}
                    handleTitle={event => {
                        dispatch(markModalActions.changeTitle(event.target.value))
                    }}
                    handleText={event => {
                        dispatch(markModalActions.changeText(event.target.value))
                    }}
                />
            </Flex>
        </Flex>
    )
}

export default MarkHeader
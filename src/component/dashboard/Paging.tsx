import React, {useEffect} from "react";
import {Box, IconButton, Select} from "@chakra-ui/react";
import {ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {fetchMonthlyMarks, marksActions} from "../../store/slice/mark";

const Paging = () => {
    const dispatch = useAppDispatch()
    const {page, size, sort, sortBy, totalPages} = useAppSelector(state => state.marksReducer)
    const {year, month} = useAppSelector(state => state.dailyReducer)

    useEffect(() => {
        dispatch(fetchMonthlyMarks({year, month, page, size, sort, sortBy}))
    }, [dispatch, page, size])

    return (
        <>
            <IconButton
                onClick={() => {
                    dispatch(marksActions.setPage(0))
                }}
                aria-label='Delete Mark'
                icon={<ArrowLeftIcon/>}
                bg='transparent'
                size='sm'
                color='blackAlpha.700'
                _active={{
                    transform: 'scale(0.9)'
                }}
            />
            <IconButton
                onClick={() => {
                    dispatch(marksActions.setPage(page - 1))
                }}
                aria-label='Delete Mark'
                icon={<ChevronLeftIcon/>}
                bg='transparent'
                size='sm'
                color='blackAlpha.700'
                _active={{
                    transform: 'scale(0.9)'
                }}
            />
            <Box
                as='button'
                bg='transparent'
                height='2rem'
                width='2rem'
                border='1px'
                borderColor='gray.200'
                justifyContent='center'
                rounded='6'
                userSelect='none'
                _hover={{
                }}
                _active={{
                    transform: 'scale(0.9)'
                }}
            >
                {page + 1}
            </Box>
            <IconButton
                onClick={() => {
                    dispatch(marksActions.setPage(page + 1))
                }}
                aria-label='Delete Mark'
                icon={<ChevronRightIcon/>}
                bg='transparent'
                size='sm'
                color='blackAlpha.700'
                _active={{
                    transform: 'scale(0.9)'
                }}
            />
            <IconButton
                onClick={() => {
                    dispatch(marksActions.setPage(totalPages - 1))
                }}
                aria-label='Delete Mark'
                icon={<ArrowRightIcon/>}
                bg='transparent'
                size='sm'
                color='blackAlpha.700'
                _active={{
                    transform: 'scale(0.9)'
                }}
            />
            <Select
                size='sm'
                width='4rem'
                rounded='6'
                value={size}
                onChange={(event) => {
                    dispatch(marksActions.setSize(parseInt(event.target.value)))
                }}
            >
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='30'>30</option>
            </Select>
        </>
    )
}

export default Paging
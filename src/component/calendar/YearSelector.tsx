import React, {useEffect} from "react";
import {Box, Flex, Select} from "@chakra-ui/react";
import {dailyActions} from "../../store/slice/daily/slice";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {fetchDailyMarks} from "../../store/slice/mark";
import {fetchYears} from "../../store/slice/daily/async-thunk";

const YearSelector = () => {
    const dispatch = useAppDispatch()
    const {year, existYears} = useAppSelector(state => state.dailyReducer)

    useEffect(() => {
        dispatch(fetchYears())
    }, [])

    return (
        <Flex
            direction='column'
            width='full'
            h='full'
            justifyContent='end'
            alignContent='center'
            userSelect='none'
            bg='white'
            rounded={10}
        >
            <Flex
                width='full'
                alignItems='center'
                justifyContent='space-between'
                userSelect='none'
            >
                <Box w='200px' p='4'>
                    <Select
                        size='lg'
                        value={year}
                        onChange={event => {
                            dispatch(dailyActions.setYear(event.target.value))
                        }}
                    > {
                        existYears.map(year => (
                            <option value={year} key={year}>{year}</option>
                        ))
                    }</Select>
                </Box>
            </Flex>
        </Flex>
    )
}

export default YearSelector
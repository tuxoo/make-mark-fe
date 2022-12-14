import React, {useEffect, useState} from "react";
import {Box, Button, Flex, Select, Spacer, useDisclosure} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import MarkModal from "./MarkModal";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {addMark, fetchDailyMarks} from "../../store/slice/mark";
import {MarkForm} from "../../service/mark.service";
import {dailyActions} from "../../store/slice/daily/slice";
import {MONTH_ITEMS} from "../../model/constant/month.constant";
import moment from "moment";
import {fetchYears} from "../../store/slice/daily/async-thunk";


const MarkHeader = () => {
    const dispatch = useAppDispatch()
    const {year, month, day, existYears} = useAppSelector(state => state.dailyReducer)

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const {isOpen, onOpen, onClose} = useDisclosure()

    useEffect(() => {
        dispatch(fetchDailyMarks({year, month, day}))
        dispatch(fetchYears())
    }, [year, month, day])

    const handleAdd = async (mark: MarkForm) => {
        await dispatch(addMark(mark))
        await dispatch(fetchDailyMarks({year, month, day}))
    }

    return (
        <Flex
            direction='column'
            width='full'
            h='full'
            justifyContent='end'
            alignContent='center'
            userSelect='none'
            bg='white'
            rounded='10'
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
                    } </Select>
                </Box>
                <Box w='200px' p='4'>
                    <Select
                        size='lg'
                        value={MONTH_ITEMS.find(m => m.order === month)!!.name}
                        onChange={event => {
                            dispatch(dailyActions.setMonth(MONTH_ITEMS.find(m => m.name === event.target.value)!!.order))
                        }}
                    > {
                        MONTH_ITEMS.map(month => (
                            <option value={month.name} key={month.order}>{month.name}</option>
                        ))
                    } </Select>
                </Box>
                <Box w='200px' p='4'>
                    <Select
                        size='lg'
                        value={day}
                        onChange={event => {
                            dispatch(dailyActions.setDay(parseInt(event.target.value)))
                        }}
                    >
                        {
                            Array.from({length: moment(new Date(year, month, day)).daysInMonth()}, (_, i) => i + 1).map(day => (
                                <option value={day} key={day}>{day}</option>
                            ))
                        }
                    </Select>
                </Box>
                <Spacer/>
                <Box p='4'>
                    <Button
                        onClick={onOpen}
                        rightIcon={<ArrowForwardIcon/>}
                        size='lg'
                        variant='outline'
                    >
                        Make
                    </Button>
                    <MarkModal
                        title={title}
                        text={text}
                        isOpen={isOpen}
                        onClose={() => {
                            setTitle('')
                            setText('')
                            onClose()
                        }}
                        handleAction={handleAdd}
                        handleTitle={event => {
                            setTitle(event.target.value)
                        }}
                        handleText={event => {
                            setText(event.target.value)
                        }}
                    />
                </Box>
            </Flex>
        </Flex>
    )
}

export default MarkHeader
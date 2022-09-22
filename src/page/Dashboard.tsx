import React, {useEffect, useState} from "react";
import Header from "../component/Header";
import {Flex, Icon, Table, TableCaption, TableContainer, Tbody, Tfoot, Th, Thead, Tr} from "@chakra-ui/react";
import {useAppDispatch, useAppSelector} from "../hook/redux";
import {fetchMonthlyMarks, marksActions} from "../store/slice/mark";
import MarkRow from "../component/dashboard/MarkRow";
import SortButton from "../component/dashboard/SortButton";
import Paging from "../component/dashboard/Paging";

const Dashboard = () => {
    const dispatch = useAppDispatch()
    const {marks, page, size, sort, sortBy} = useAppSelector(state => state.marksReducer)
    const {year, month} = useAppSelector(state => state.dailyReducer)

    const [daySort, setDaySort] = useState(false)
    const [timeSort, setTimeSort] = useState(false)

    useEffect(() => {
        console.log(sort, sortBy)
        dispatch(fetchMonthlyMarks({year, month, page, size, sort, sortBy}))
    }, [daySort, timeSort])

    return (
        <>
            <Header/>
            <Flex direction='column' minHeight='90vh' align='center' justifyContent='start' pb='5'>
                <Flex bg='transparent' alignItems='center' justifyContent='center'>
                    <TableContainer bg='white' rounded='10' p='4'>
                        <Table size='md'>
                            <TableCaption>
                                <Flex width='full' height='full' justifyContent='center'>
                                    <Paging/>
                                </Flex>
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Title</Th>
                                    <Th>Year</Th>
                                    <Th>Month</Th>
                                    <Th>
                                        <Flex width='full' height='full' justifyContent='center' alignItems='center'>
                                            Day
                                            <SortButton handle={() => {
                                                if (sort !== 'day') {
                                                    dispatch(marksActions.setSort('day'))
                                                }

                                                if (daySort) {
                                                    dispatch(marksActions.setSortBy('desc'))
                                                } else {
                                                    dispatch(marksActions.setSortBy('asc'))
                                                }

                                                setDaySort(!daySort)
                                            }}/>
                                        </Flex>
                                    </Th>
                                    <Th>
                                        <Flex width='full' height='full' justifyContent='center' alignItems='center'>
                                            Time
                                            <SortButton handle={() => {
                                                if (sort !== 'createdAt') {
                                                    dispatch(marksActions.setSort('createdAt'))
                                                }

                                                if (timeSort) {
                                                    dispatch(marksActions.setSortBy('desc'))
                                                } else {
                                                    dispatch(marksActions.setSortBy('asc'))
                                                }

                                                setTimeSort(!timeSort)
                                            }}/>
                                        </Flex>
                                    </Th>
                                    <Th>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    marks.map(mark => (
                                        <MarkRow
                                            key={mark.id}
                                            id={mark.id}
                                            title={mark.title}
                                            createdAt={mark.createdAt}
                                        />
                                    ))
                                }
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Title</Th>
                                    <Th>Year</Th>
                                    <Th>Month</Th>
                                    <Th>Day</Th>
                                    <Th>Time</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </Flex>
            </Flex>
        </>
    )
}

export default Dashboard
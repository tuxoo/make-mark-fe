import React from "react";
import {Flex, Grid} from "@chakra-ui/react";
import {MONTH_ITEMS} from "../model/constant/month.constant";
import Header from "../component/Header";
import YearSelector from "../component/calendar/YearSelector";
import MonthCard from "../component/calendar/MonthCard";

const Calendar = () => {
    return (
        <>
            <Header/>
            <Flex direction='column' minHeight='90vh' width='full' alignItems='center' justifyContent='center' pb='5'>
                <Flex bg='transparent' alignItems='center' p='5'>
                    <YearSelector/>
                </Flex>
                <Flex bg='transparent' alignItems='center' justifyContent='center'>
                    <Grid
                        templateRows='repeat(3, 1fr)'
                        templateColumns='repeat(3, 1fr)'
                        gap={10}
                    >
                        {
                            MONTH_ITEMS.map(month => (
                                <MonthCard order={month.order} season={month.season} name={month.name} key={month.order}/>
                            ))
                        }
                    </Grid>
                </Flex>
            </Flex>
        </>
    )
}

export default Calendar
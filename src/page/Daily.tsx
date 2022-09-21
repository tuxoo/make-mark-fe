import React, {useEffect} from "react";
import {Flex, Grid} from "@chakra-ui/react";
import Mark from "../component/mark/Mark";
import MarkHeader from "../component/mark/MarkHeader";
import {useAppDispatch, useAppSelector} from "../hook/redux";
import {fetchMarks} from "../store/slice/mark";
import Header from "../component/Header";

const Daily = () => {
    const dispatch = useAppDispatch()
    const {marks} = useAppSelector(state => state.marksReducer)

    useEffect(() => {
        dispatch(fetchMarks(new Date()))
    }, [dispatch])

    return (
        <>
            <Header/>
            <Flex direction='column' minHeight='90vh' align='center' justifyContent='start' pb='5'>
                <Flex width='980px' bg='transparent' alignItems='center' p='5'>
                    <MarkHeader/>
                </Flex>
                <Flex width='full' bg='transparent' alignItems='center' justifyContent='center'>
                    <Grid
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(2, 1fr)'
                        gap={5}
                    >
                        {
                            marks.map(mark => (
                                <Mark key={mark.id} id={mark.id} title={mark.title} text={mark.text}
                                      time={mark.createdAt}/>
                            ))
                        }
                    </Grid>
                </Flex>
            </Flex>
        </>

    )
}

export default Daily
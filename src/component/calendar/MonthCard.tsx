import React from "react";
import {Box, Flex, GridItem, Img, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {dailyActions} from "../../store/slice/daily/slice";

interface MarkProps {
    order: number,
    name: string,
    season: string,
}

const MonthCard = ({order, name, season}: MarkProps) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <GridItem colSpan={1} w='full' h='full' bg='transparent'>
            <Flex
                direction='column'
                width='200px'
                bgColor='white'
                boxShadow='xl'
                p={4}
                rounded={10}
                shadow='2xl'
                userSelect='none'
                justifyContent='center'
            >
                <Flex width='full' h='full' justifyContent='center'>
                    <Text as='i'>
                        {name}
                    </Text>
                </Flex>
                <Flex width='full' h='full' justifyContent='center'>
                    <Box
                        as='button'
                        p='1'
                        onClick={() => {
                            dispatch(dailyActions.setMonth(order))
                            navigate('/dashboard')
                        }}
                    >
                        <Img src={`static/${season}.png`}/>
                    </Box>
                </Flex>
            </Flex>
        </GridItem>
    )
}

export default MonthCard
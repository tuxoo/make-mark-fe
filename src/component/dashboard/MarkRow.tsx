import React from "react";
import {IconButton, Td, Tr} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {deleteMark} from "../../store/slice/mark";
import {MONTH_ITEMS} from "../../model/constant/month.constant";
import moment from "moment/moment";

interface MarkRowProps {
    id: string,
    title: string,
    createdAt: string,
}

const MarkRow = ({id, title, createdAt}: MarkRowProps) => {
    const dispatch = useAppDispatch()
    const {year, month} = useAppSelector(state => state.dailyReducer)

    return (
        <Tr>
            <Td>{title}</Td>
            <Td>{year}</Td>
            <Td>{MONTH_ITEMS.find(m => m.order === month)!!.name}</Td>
            <Td>{moment(createdAt).date()}</Td>
            <Td>{moment(createdAt).format('LT')}</Td>
            <Td>
                <IconButton
                    onClick={() => {
                        dispatch(deleteMark(id))
                    }}
                    aria-label='Delete Mark'
                    icon={<DeleteIcon/>}
                    bg='transparent'
                    size='md'
                    color='blackAlpha.700'
                    _active={{
                        transform: 'scale(0.9)'
                    }}
                />
            </Td>
        </Tr>
    )
}

export default MarkRow
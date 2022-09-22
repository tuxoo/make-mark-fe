import React, {useEffect, useState} from "react";
import {Button, Flex, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {useAppDispatch, useAppSelector} from "../hook/redux";
import {getProfile} from "../store/slice/user";
import {fetchDailyMarks} from "../store/slice/mark";
import {localStorageService} from "../service/local-storage.service";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.loginReducer)

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])

    return (
        <Flex minHeight='10vh' width='full' align='start' justifyContent='end' p='5'>
            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon/>}
                    bg='white'
                >
                    {`${user?.firstName} ${user?.lastName}`}
                </MenuButton>
                <MenuList>
                    <MenuItem
                        onClick={() => navigate('/calendar')}
                    >Calendar</MenuItem>
                    <MenuItem
                        onClick={() => navigate('/daily')}
                    >
                        Daily
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            localStorageService.removeAccessToken()
                            navigate('/')
                        }}
                    >
                        Logout</MenuItem>
                </MenuList>
            </Menu>

            {/*<Tag height='10' bg='transparent'>*/}
            {/*    <TagLabel fontSize='lg'>Eugene Krivtsov</TagLabel>*/}
            {/*</Tag>*/}

            {/*    </Flex>*/}
        </Flex>
    )
}

export default Header
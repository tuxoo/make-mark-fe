import React from "react";
import {Box, Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import Title from "../component/Title";
import LoginInput from "../component/LoginInput";

const Login = () => {
    return (
        <Box bgGradient={'linear(to-b, yellow.200, red.200)'}>
            <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
                <Flex direction='column' width='360px' bgColor='white' boxShadow='xl' p={4} rounded={10}>
                    <Tabs
                        p='2'
                        isFitted
                        variant='enclosed'
                    >
                        <TabList>
                            <Tab>Sign In</Tab>
                            <Tab>Sign Out</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Title text={'Sign in to MakeMark'}/>
                                <Text>
                                    Please enter your email and password
                                </Text>
                                <LoginInput label={'Email'} type={'email'}/>
                                <LoginInput label={'Password'} type={'password'}/>
                            </TabPanel>
                            <TabPanel>
                                <Title text={'Sign up to MakeMark'}/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Flex
                        align='center'
                        justifyContent='center'
                    >
                        <Box
                            as='button'
                            width='40'
                            height='10'
                            bg='blue.100'
                            justifyContent='center'
                            rounded='6'
                            userSelect='none'
                            _hover={{
                                bg: `#B794F4`
                            }}
                            _active={{
                                bg: `#B794F4`,
                                transform: 'scale(0.95)',
                            }}
                        >
                            Sign In
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Login
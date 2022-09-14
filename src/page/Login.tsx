import React from "react";
import {Box, Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import Title from "../component/Title";
import LoginInput from "../component/LoginInput";
import LoginButton from "../component/LoginButton";

const Login = () => {
    return (
        <Box bgGradient={'linear(to-b, purple.200, blue.600)'}>
            <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
                <Flex direction='column' width='480px' bgColor='white' boxShadow='xl' p={4} rounded={10} shadow='2xl'>
                    <Tabs
                        p='5'
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
                                <Text p='5'>
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
                        p='5'
                    >
                        <LoginButton text={'Sign In'}/>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Login
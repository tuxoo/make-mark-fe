import React, {useEffect, useState} from "react";
import {Flex, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import LoginInput from "../component/LoginInput";
import LoginButton from "../component/LoginButton";
import Label from "../component/Label";
import LoginText from "../component/LoginText";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hook/redux";
import {signIn, signUp} from "../store/slice/user";

const initState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const {isAuthenticated, isRegistered} = useAppSelector(state => state.loginReducer)

    const [formValue, setFormValue] = useState(initState);
    const [reg, setReg] = useState(false)

    const handleTabChange = (event: any) => {
        switch (event) {
            case 0:
                setReg(false)
                break;
            case 1:
                setReg(true)
                break;
        }
    }

    const handleInputChange = (event: any) => {
        setFormValue({...formValue, [event.target.name]: event.target.value})
    }

    const {firstName, lastName, email, password, confirmPassword} = formValue;

    const handleLogin = async () => {
        if (email && password) {
            await dispatch(signIn({email, password}))
        }
    }

    const handleReg = async () => {
        if (password !== confirmPassword) {
            return toast.error("Password doesn't match");
        }

        if (firstName && lastName && password && email) {
            await dispatch(signUp({firstName, lastName, email, password}))
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            toast.success("User Login Successfully");
            navigate('/marks')
        }
    }, [isAuthenticated])

    useEffect(() => {
        if (isRegistered) {
            toast.success("User Register Successfully");
            navigate('/') // TODO: re render / page
        }
    }, [isRegistered])

    return (
        <Flex minHeight='95vh' width='full' align='center' justifyContent='center'>
            <Flex direction='column' width='480px' bgColor='white' boxShadow='xl' p={4} rounded={10} shadow='2xl'>
                <Tabs
                    p='3'
                    isFitted
                    variant='enclosed'
                    onChange={handleTabChange}
                >
                    <TabList>
                        <Tab>Sign In</Tab>
                        <Tab>Sign Out</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Label path={'static/logo.png'}/>
                            <LoginText text={'Please enter your email and password'}/>
                            <LoginInput label={'Email'} type={'email'} handle={handleInputChange}/>
                            <LoginInput label={'Password'} type={'password'} handle={handleInputChange}/>
                        </TabPanel>
                        <TabPanel>
                            <Label path={'static/logo.png'}/>
                            <LoginText text={'Please enter user details'}/>
                            <LoginInput label={'First Name'} type={'text'} handle={handleInputChange}/>
                            <LoginInput label={'Last Name'} type={'text'} handle={handleInputChange}/>
                            <LoginInput label={'Email'} type={'email'} handle={handleInputChange}/>
                            <LoginInput label={'Password'} type={'password'} handle={handleInputChange}/>
                            <LoginInput label={'Confirm Password'} type={'password'} handle={handleInputChange}/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Flex
                    align='center'
                    justifyContent='center'
                    p='3'
                >
                    {reg ? (
                        <LoginButton text={'Sign Up'} handle={handleReg}/>
                    ) : (
                        <LoginButton text={'Sign In'} handle={handleLogin}/>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Login
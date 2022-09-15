import React from "react";
import {Button, Flex, Tag, TagLabel} from "@chakra-ui/react";

const Header = () => {
    return (
        <Flex minHeight='5vh' width='full' align='center' justifyContent='end' pr='5'>
            {/*    <Flex direction='column' width='480px' bgColor='white' boxShadow='xl' p={4} rounded={10} shadow='2xl'>*/}

            <Button size='lg' bg='white'>
                Logout
            </Button>

            {/*<Tag height='10' bg='transparent'>*/}
            {/*    <TagLabel fontSize='lg'>Eugene Krivtsov</TagLabel>*/}
            {/*</Tag>*/}

            {/*    </Flex>*/}
        </Flex>
    )
}

export default Header
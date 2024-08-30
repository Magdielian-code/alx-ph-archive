'use client';

import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import Container from "@/components/Container";

const Hero = () => {
  return (
    <Box>
        <Container>
            <Avatar
                name="Ozioma Agaecheta"
                src="/assets/me2.jpeg"
                size={"sm"}
                display={{ base:"block", md: "none" }}
                style={{ border: "2px solid #E7BC91" }}
            />
            <Heading as="h1" mt={{ base:5, md:8, lg:12 }} color={"white"} fontSize={{base:"60px", md:"100px", lg:"100px"}} fontWeight={"bold"} textAlign="left">
                Ozioma Agaecheta
            </Heading>
            <Heading as="h2" mt={1} fontFamily={"san serif"} color={"brown.200"} fontSize={{ base:"20px", md:"50px", lg:"55px"}} fontWeight={{ base:"light", md:"bold" }} textAlign="left">
                Full Stack &amp; Web3 Engineer 
            </Heading>
            <Text
                fontSize={{ base:'lg', md:'35px'}}
                color={'white'}
                mt={{base:8, md:36}}
            
            >
                I&apos;m passionate about 💻 coding scalable systems, 🤖 automating
                workflows, ☁️ cloud infrastructure, and 🤝 collaborative development,
                thriving on adapting to new technologies 🚀.
            </Text>
            <Flex
                mt={8}
                gap={{base:8, md:60}}
                flexDirection={{ base:"column", md:"row"}}

            >
                <Flex align={"center"} gap={3}>
                    <Avatar
                        name='ALX'
                        src='/assets/alxLogo.jpeg'
                        size={{ base:'sm', md:'md'}}
                        
                    />
                    <Text>Diploma, Software Engineering</Text>
                </Flex>
                <Flex align={"center"} gap={3}>
                    <Avatar
                        name='Easymail'
                        src='/asset/easymail.jpeg'
                        size={{ base:'sm', md:'md'}}
                    
                    />
                    <Text>Diploma, Software Engineering</Text>
                </Flex>
               
            </Flex>
        </Container>
    </Box>
  )
}

export default Hero
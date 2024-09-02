"use client";

import { Avatar, Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import NavContainer from "@/components/Utils/NavContainer";

const Hero = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="top"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="url('/assets/bg1.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity="0.5"
        zIndex="1"
      />
      <Box position="relative" zIndex="2" width="100%" height="100%">
        <NavContainer>
          <VStack spacing={4}>
            <Text
              fontSize={{base:'6xl', md:"8xl"}}
              fontWeight="bold"
              textAlign={{base:'left', md:"center"}}
              maxWidth="1200px"
              mt={{base:10, md:20, lg:32 }}
            >
              "Money can't buy you happiness, but it sure can buy you a lot of
              toasties."
            </Text>
            <Text as={'h2'} textAlign={{base:'left', md:"center"}} fontSize="3xl">- Ozioma Agaecheta</Text>
          </VStack>
        </NavContainer>
      </Box>
    </Box>
  );
};

export default Hero;

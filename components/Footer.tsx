'use client';

import React from 'react';
import { Box, Container, SimpleGrid, Stack, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blue.200', 'blue.700'),
      }}>
      <Text srOnly>{label}</Text>
      {children}
    </Box>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('blue.200', 'blue.700')}
      color={useColorModeValue('blue.700', 'blue.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Text fontSize={'lg'} fontWeight={'bold'}>
                ALX PH HOME
              </Text>
            </Box>
            <Text fontSize={'sm'}>
              Developed By: Ozioma Agaecheta
            </Text>
            <Text fontSize={'sm'}>
              © 2024 Ozioma Agaecheta. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Quick Links</ListHeader>
            <Box as="a" href={'#'}>
              Home
            </Box>
            <Box as="a" href={'#'}>
              Hall of Fame
            </Box>
            <Box as="a" href={'#'}>
              About Us
            </Box>
            <Box as="a" href={'#'}>
              Contact
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Resources</ListHeader>
            <Box as="a" href={'#'}>
              ALX Program
            </Box>
            <Box as="a" href={'#'}>
              Community Guidelines
            </Box>
            <Box as="a" href={'#'}>
              FAQs
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay Connected</ListHeader>
            <Text>Subscribe to our newsletter for updates</Text>
            {/* You can add a newsletter subscription form here */}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
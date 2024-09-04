'use client';

import React from 'react';
import { Box, Flex, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSquareXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import FamerData from '@/components/Utils/FamerData';

const iconMap = {
  faLinkedin,
  faGithub,
  faSquareXTwitter,
};

const Famer: React.FC = () => {
  return (
    <SimpleGrid p={'10px'} spacing={10} minChildWidth={'300px'}>
      {FamerData.map((famer) => (
        <Box key={famer.name} p={6} boxShadow="lg" borderRadius="md">
          <Flex direction="column" align="center">
            <Image src={famer.image} alt={famer.name} boxSize="120px" borderRadius="full" mb={4} />
            <Text fontWeight="bold" fontSize="xl">
              {famer.name}
            </Text>
            <Text>{famer.testimonial}</Text>
            <Flex mt={4}>
              {famer.socials.map((social, index) => (
                <Link href={social.href} key={index} mr={2}>
                  <FontAwesomeIcon icon={iconMap[social.icon as keyof typeof iconMap]} size="2x" />
                </Link>
              ))}
            </Flex>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Famer;
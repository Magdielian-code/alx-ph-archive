"use client";

import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  Image,
  SimpleGrid,
  Link,
  Box,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

import Container from "@/components/Container";

const About = () => {
  const cardData = [
    {
      name: "Ozioma Agaecheta",
      image: "/assets/me3.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sunt necessitatibus rerum corporis officia est provident nemo sint molestiae, quia mollitia, dignissimos minus quaerat! Veritatis dolores corporis exercitationem enim alias.",
      socials: [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/', icon: faLinkedin },
        { name: 'GitHub', href: 'https://github.com/Magdielian-code', icon: faGithub },
        { name: 'Twitter', href: 'https://twitter.com/magdiel_amor', icon: faSquareXTwitter },
      ]
    },
    {
      name: "Blessing Ayomide-Akinade",
      image: "/assets/bless.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam. Nihil, repellendus rem. Dolor sit amet consectetur adipisicing elit.",
      socials: [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/blessing-ayomide-akinade/', icon: faLinkedin },
        { name: 'GitHub', href: 'https://github.com/blessingakinade', icon: faGithub },
        { name: 'Twitter', href: 'https://twitter.com/blessingakinade', icon: faSquareXTwitter },
      ]
    }
  ];

  const PersonCard = ({ name, image, description, socials }: { name: string, image: string, description: string, socials: { name: string, href: string, icon: any }[] }) => (
    <Card maxW="sm">
      <CardBody>
        <Box height="250px" width="100%" overflow="hidden" borderRadius="lg">
          <Image
            src={image}
            alt={`A picture of ${name}`}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex gap={4} justifyContent="space-around" width="100%">
          {socials.map((social) => (
            <Link key={social.href} href={social.href} isExternal>
              <Button
                variant="outline"
                colorScheme="blue"
                size="sm"
              >
                <Flex align="center">
                  <FontAwesomeIcon
                    icon={social.icon}
                    size="sm"
                    style={{ marginRight: "8px" }}
                  />
                  <Text 
                    color="#023E8A" 
                    fontWeight="light" 
                    fontSize="sm"
                    _hover={{ color: "blue.500" }}
                  >
                    {social.name}
                  </Text>
                </Flex>
              </Button>
            </Link>
          ))}
        </Flex>
      </CardFooter>
    </Card>
  );

  return (
   <Box bg={'blue.800'} >
     <Container>
      <Text 
        as="h1"
        mt={20}
        fontWeight={'bold'}
        textAlign={'center'}
        fontSize={'6xl'}
      >
        Meet our Coordinators
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={20}>
        {cardData.map((person, index) => (
          <PersonCard key={index} {...person} />
        ))}
      </SimpleGrid>
    </Container>
   </Box>
  );
};

export default About;
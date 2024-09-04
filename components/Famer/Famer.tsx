"use client";

import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faSquareXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import FamerData from "@/components/Utils/FamerData";
import NavContainer from "../Utils/NavContainer";

const iconMap = {
  faLinkedin,
  faGithub,
  faSquareXTwitter,
};

const Famer: React.FC = () => {
  return (
    <NavContainer>
      <Box as="div"  h={'150px'} bg={'blue.200'}>
        <Text  color={'white'} my={"40px"} textAlign={"center"} fontWeight={"bold"}>
          <Text as={"p"}>
            “We have so many inspirational, talented and skilful Individuals who
            make valuable impact to the growth of our community.”
          </Text>
          <Text as={"p"}>
            They have shown valuable and credible chaacter, a high sense of
            responsibility and devotion.
          </Text>
        </Text>
      </Box>

      <SimpleGrid position={'relative'} p={"10px"} spacing={10} mt={"40px"} minChildWidth={"300px"}>
        {FamerData.map((famer) => (
          <Card key={famer.name} p={6} boxShadow="lg" borderRadius="md">
            <Flex direction="column" align="center">
              <CardHeader>
                <Image
                  src={famer.image}
                  alt={famer.name}
                  boxSize="120px"
                  borderRadius="full"
                  mb={4}
                />
                <Text fontWeight="bold" fontSize="md">
                  {famer.name}
                </Text>
              </CardHeader>
              <CardBody>
                <Text textAlign={"center"}>{famer.testimonial}</Text>
              </CardBody>
              <CardFooter>
                <Flex mt={4}>
                  {famer.socials.map((social, index) => (
                    <Link href={social.href} key={index} mr={2}>
                      <FontAwesomeIcon
                        icon={iconMap[social.icon as keyof typeof iconMap]}
                        color="blue.200"
                        size="1x"
                      />
                    </Link>
                  ))}
                </Flex>
              </CardFooter>
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
      <Text textAlign={"center"} my={"40px"} fontWeight={"bold"}>
        Thank you for your contribution to the community.
      </Text>
    </NavContainer>
  );
};

export default Famer;

"use client";
import Home from "@/app/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAward,
  faPen,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

import NavContainer from "../Utils/NavContainer";

import {
  Avatar,
  Box,
  Button,
  Flex,
  Link,
  Spacer,
  Icon,
  Text,
} from "@chakra-ui/react";

import React from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { ColorModeToggle } from "../Utils/ColorModeToggle";


const navMenuLinks = [
  { name: "Home", href: "/", icon: faHouse },
  { name: "Hall of Famer", href: "/talks", icon: faAward },
  { name: "Blog", href: "/blog", icon: faPen },
  { name: "Products", href: "/products", icon: faProductHunt },
  { name: "News", href: "/consulting", icon: faNewspaper },
];

export const Nav: React.FC = () => {
  const scrollDirection = useScrollDirection();

  return (
    <Box
      w={"100%"}
      zIndex={2}
      bg={"#fff"}
      position={{ base: "fixed", md: "relative" }}
      bottom={{ base: scrollDirection === "down" ? "-100%" : "0", md: "auto" }}
      left={"0"}
      borderTop={{ base: "0.5px solid #E2E8F0", md: "none" }}
      transition="bottom 0.3s"
    >
      <NavContainer>
      <Box>
        <Flex align={"center"} my={"6"} display={{ base: "none", md: "flex" }}>
        <Avatar
              name="Ozioma Agaecheta"
              src="/assets/me2.jpeg"
              size={"sm"}
              style={{ border: "2px solid #E7BC91" }}
          />
          <Text
            fontSize={{base:'none', lg:"xl"}}
            fontWeight="bold"
            color="#023E8A"
            ml={"4"}
          > 
            ALX-PH-ARCHIVE
          </Text>

          <Spacer />

          <Flex gap="4" justifyContent="end">
            {navMenuLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  style={{ border: "none" }}
                  variant="outline"
                  colorScheme="blue"
                  size="md"
                >
                  <Flex align="center">
                    <FontAwesomeIcon
                      icon={link.icon}
                      size="sm"
                      style={{ color: "black", marginRight: "8px", }}
                      
                    />
                    <Text 
                      color="#023E8A" 
                      fontWeight="light" 
                      fontSize="xl"
                      _hover={{ color: "white" }}
                    >
                      {link.name}
                    </Text>
                  </Flex>
                </Button>
              </Link>
            ))}
          </Flex>
          <Spacer />
          <Avatar
              name="Ozioma Agaecheta"
              src="/assets/me2.jpeg"
              size={"sm"}
              style={{ border: "2px solid #E7BC91" }}
          />
          
          <ColorModeToggle />
        </Flex>

        {/*  Mobile View*/}
        <Flex
          w={"100%"}
          zIndex={1}
          display={{ base: "flex", md: "none" }}
          justifyContent={"space-around"}
        >
          {navMenuLinks.map((link) => (
            <Link
              justifyContent="center"
              alignItems={"center"}
              display={"flex"}
              flexDirection={"column"}
              key={link.href}
              href={link.href}
            >
              <Icon
                as={FontAwesomeIcon}
                icon={link.icon}
                boxSize={4}
                style={{ color: "#E7BC91" }}
              />
              <Text color="white" fontSize="xs">
                {link.name}
              </Text>
            </Link>
          ))}
        </Flex>
      </Box>
      </NavContainer>
    </Box>
  );
};

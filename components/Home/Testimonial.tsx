"use client";

import React, { useRef } from "react";
import {
  Box,
  Text,
  Avatar,
  VStack,
  Container,
  IconButton,
  useBreakpointValue,
  Card,
  SimpleGrid,
  CardHeader,
  Flex,
  CardBody,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import dynamic from "next/dynamic";
import testimonialData from "@/components/Utils/TestimonialData";

// Dynamic import of react-slick
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

interface TestimonialCardProps {
  name: string;
  program: string;
  avatar: string;
  testimonial: string;
}

const TestimonialCard = ({
  name,
  program,
  avatar,
  testimonial,
}: TestimonialCardProps) => (
  <Card
    bg="white"
    boxShadow="lg"
    my={"40px"}
    rounded="lg"
    maxW="lg"
    mx="auto"
    height="auto"
    textAlign={"justify"}
    minHeight={"fit-content"}
  >
    <CardHeader height="100%" mx={"auto"}>
      <Flex mt={6} flexDirection={"row"}>
        <Avatar size="md" mr={2} src={avatar} name={name} />
        <VStack align={"start"} ml={3} spacing={2}>
          <Text as={"h2"} fontWeight="bold" textAlign={"left"} fontSize="md">
            {name}
          </Text>
          <Text as={"h3"} color="gray.500" fontSize={"sm"} textAlign={"left"}>
            {program}
          </Text>
        </VStack>
      </Flex>
    </CardHeader>
    <CardBody flex="1">
      <Text mx={4} minWidth={"70%"} fontSize="md" minHeight="100px">
        {testimonial}
      </Text>
    </CardBody>
  </Card>
);

const Testimonial = () => {
  const sliderRef = useRef<typeof Slider | null>(null);
  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 }) ?? 1;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Container maxW="container.xl" py={12}>
      <Box position="relative">
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index}>
              <Box px={2}>
                <TestimonialCard {...testimonial} />
              </Box>
            </div>
          ))}
        </Slider>
        <IconButton
          aria-label="Previous testimonial"
          icon={<ChevronLeftIcon />}
          position="absolute"
          left={2}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          onClick={() => sliderRef.current}
        />
        <IconButton
          aria-label="Next testimonial"
          icon={<ChevronRightIcon />}
          position="absolute"
          right={2}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          onClick={() => sliderRef.current}
        />
      </Box>
    </Container>
  );
};

export default Testimonial;

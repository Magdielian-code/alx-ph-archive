'use client';

import React, { useRef } from 'react';
import { Box, Text, Avatar, VStack, Container, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import testimonialData from '@/components/Utils/TestimonialData';

// Dynamic import of react-slick
const Slider = dynamic(() => import('react-slick'), { ssr: false, loading: () => <p>Loading...</p> });

interface TestimonialCardProps {
  name: string;
  program: string;
  avatar: string;
  testimonial: string;
}

const TestimonialCard = ({ name, program, avatar, testimonial }: TestimonialCardProps) => (
  <Box 
    bg="white" 
    boxShadow="lg" 
    p={6} 
    rounded="lg"
    maxW="sm"
    mx="auto"
    height="100%"
  >
    <VStack spacing={4} align="center" height="100%" justifyContent="space-between" textAlign="center">
      <Avatar size="xl" src={avatar} name={name} />
      <VStack spacing={2}>
        <Text fontWeight="bold" fontSize="xl">{name}</Text>
        <Text color="gray.500">{program}</Text>
      </VStack>
      <Box flex="1">
        <Text fontSize="md" minHeight="80px">{testimonial}</Text>
      </Box>
    </VStack>
  </Box>
);

const Testimonial = () => {
  // Use typeof Slider to correctly type the ref
  const sliderRef = useRef<typeof Slider | null>(null);
  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 }) ?? 1;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
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

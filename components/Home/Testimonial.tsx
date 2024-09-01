'use client';


import React from 'react';
import { Box, Text, Avatar, VStack, Container, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const testimonials = [
  {
    name: 'John Doe',
    program: 'Computer Science',
    avatar: '/api/placeholder/100/100',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable."
  },
  {
    name: 'Jane Smith',
    program: 'Data Science',
    avatar: '/api/placeholder/100/100',
    testimonial: 'The hands-on projects really helped me understand complex concepts. Highly recommended!'
  },
  {
    name: 'Mike Johnson',
    program: 'Artificial Intelligence',
    avatar: '/api/placeholder/100/100',
    testimonial: 'The instructors are top-notch. I feel well-prepared for my career in AI.'
  },
  {
    name: 'Emily Brown',
    program: 'Cybersecurity',
    avatar: '/api/placeholder/100/100',
    testimonial: "The program's focus on practical skills has given me confidence in my abilities."
  },
  {
    name: 'Alex Lee',
    program: 'Web Development',
    avatar: '/api/placeholder/100/100',
    testimonial: "I've learned so much in such a short time. The curriculum is comprehensive and up-to-date."
  }
];

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
    <VStack spacing={4} align="center" height="100%" justifyContent="space-between">
      <Avatar size="xl" src={avatar} name={name} />
      <VStack spacing={2}>
        <Text fontWeight="bold" fontSize="xl">{name}</Text>
        <Text color="gray.500">{program}</Text>
      </VStack>
      <Text textAlign="center" fontSize="md">{testimonial}</Text>
    </VStack>
  </Box>
);

const Testimonial = () => {
  const sliderRef = React.useRef<any>(null);
  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 }) ?? 1;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
  };

  return (
    <Container maxW="container.xl" py={12}>
      <Box position="relative">
        {/* <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} px={2}>
              <TestimonialCard {...testimonial} />
            </Box>
          ))}
        </Slider> */}
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
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
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <IconButton
          aria-label="Next testimonial"
          icon={<ChevronRightIcon />}
          position="absolute"
          right={2}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          onClick={() => sliderRef.current?.slickNext()}
        />
      </Box>
    </Container>
  );
};

export default Testimonial;


// // Compare this snippet from components/Home/Services.tsx:

// import React from 'react';
// import { Box, Text, Avatar, VStack, Container, IconButton, useBreakpointValue } from '@chakra-ui/react';
// import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
// import dynamic from 'next/dynamic';

// const Slider = dynamic(() => import('react-slick'), { ssr: false });

// // ... (keep the testimonials array and TestimonialCard component as they were)

// const TestimonialCarousel = () => {
//   const sliderRef = React.useRef<any>(null);
//   const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 }) ?? 1;
//   const [mounted, setMounted] = React.useState(false);

//   React.useEffect(() => {
//     setMounted(true);
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: slidesToShow,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '60px',
//   };

//   if (!mounted) return null;

//   return (
//     <>
//       {mounted && (
//         <Slider ref={sliderRef} {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index}>
//               <Box px={2}>
//                 <TestimonialCard {...testimonial} />
//               </Box>
//             </div>
//           ))}
//         </Slider>
//       )}
//       <IconButton
//         aria-label="Previous testimonial"
//         icon={<ChevronLeftIcon />}
//         position="absolute"
//         left={2}
//         top="50%"
//         transform="translateY(-50%)"
//         zIndex={2}
//         onClick={() => sliderRef.current?.slickPrev()}
//       />
//       <IconButton
//         aria-label="Next testimonial"
//         icon={<ChevronRightIcon />}
//         position="absolute"
//         right={2}
//         top="50%"
//         transform="translateY(-50%)"
//         zIndex={2}
//         onClick={() => sliderRef.current?.slickNext()}
//       />
//     </>
//   );
// };

// // This is a client-side only component
// const ClientSideCarousel = dynamic(() => Promise.resolve(TestimonialCarousel), { ssr: false });

// const Testimonial = () => {
//   return (
//     <Container maxW="container.xl" py={12}>
//       <Box position="relative">
//         <ClientSideCarousel />
//       </Box>
//     </Container>
//   );
// };

// export default Testimonial;
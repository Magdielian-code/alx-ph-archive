"ui client";
import { Box, others } from "@chakra-ui/react";

interface ContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const NavContainer = ({ children, id = "", className = "" }: ContainerProps) => {
  return (
    <Box  
      color={'black'}
      mx={'auto'}
      p={3}
      className={className}
      id={id}
      maxW={{ base: "2xl", md: "4xl", lg: "80%"}}
    
    >
      {children}
    </Box>
  );
};

export default NavContainer;

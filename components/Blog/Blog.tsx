import React from "react";
import NavContainer from "../Utils/NavContainer";
import {
  Flex,
  Card,
  Grid,
  GridItem,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

const Blog = () => {
  return (
    <NavContainer>
      <Grid templateColumns="1fr 2fr 1fr" gap={0.7}>
        <GridItem w="100%" h="100vh" bg="white" boxShadow={"lg"}>
          <Flex flexDirection={'column'}>
            <Card align={'start'}>
              <CardHeader>{blog.catchPhrase}</CardHeader>
              <CardBody>{blog.subtitle}</CardBody>
              <CardFooter>
                <Flex></Flex>
              </CardFooter>
            </Card>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100vh" bg="white" boxShadow={"lg"}>
          <Flex></Flex>
        </GridItem>
        <GridItem w="100%" h="100vh" bg="white" boxShadow={"lg"}>
          <Flex></Flex>
        </GridItem>
      </Grid>
    </NavContainer>
  );
};

export default Blog;

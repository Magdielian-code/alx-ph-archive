"use client";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
  extendTheme,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import Container from "@/components/Container";
import React from "react";
import tools, { Tool } from "@/components/Utils/Tools";

const Skillset = () => {
  const categories = [
    { name: "Programming Languages", type: "Languages" },
    { name: "Frameworks/Libraries", type: "Frameworks/Libraries" },
    { name: "Databases", type: "Databases" },
    { name: "Cloud/DevOps", type: "Cloud/DevOps" },
    { name: "Tools", type: "Tools" },
  ];

  return (
    <Container>
      <Tabs mt={40} variant={"enclosed"}>
        <TabList>
          {categories.map((category) => (
            <Tab key={category.name}>{category.name}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {categories.map((category) => (
            <TabPanel key={category.name}>
              <Grid
                templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
                gap={6}
              >
                {tools
                  .filter((tool) => tool.type === category.type)
                  .map((tool: Tool) => (
                    <GridItem key={tool.name}  textAlign="left">
                      <tool.icon size={40} />
                      <Box mt={2}>{tool.name}</Box>
                    </GridItem>
                  ))}
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Skillset;

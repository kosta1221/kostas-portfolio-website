import React from "react";
import { Heading, SlideFade, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import StackCard from "../components/StackCard";
import { techStacks } from "../constant";

const TechStackSection = () => {
  return (
    <SlideFade in offsetY={80} delay={0.2}>
      <Heading as="h1" fontSize={{ base: "24px", md: "30px", lg: "36px" }} mb={3}>
        Tech Stack
      </Heading>
      <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={"lg"}>
        Check out some of my favorite tools and technologies which I use on a regular basis -
      </Text>
      <Grid
        mt={5}
        templateColumns={["1fr", "repeat(2,1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={[2, 5, 5, 5]}
      >
        {techStacks.map((stack) => (
          <StackCard stack={stack} key={stack?.name} />
        ))}
      </Grid>
    </SlideFade>
  );
};

export default TechStackSection;

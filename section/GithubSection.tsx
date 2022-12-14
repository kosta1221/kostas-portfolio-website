/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Heading, SlideFade, Box, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import GithubCard from "../components/GithubCard";
import { GithubProps } from "../pages/github";

const GithubSection = ({ repos }: GithubProps) => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <SlideFade in offsetY={80} delay={0.2}>
      <Heading as="h1" fontSize={{ base: "24px", md: "30px", lg: "36px" }} mb={3}>
        Github
      </Heading>
      <Text textColor={textColor}>Here you can find my top featured github repositories.</Text>
      <Text textColor={textColor}>
        Feel free to pay a visit and don't forget to leave me a star! ⭐{" "}
      </Text>
      <Box my={5}>
        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
          {repos.map((repo) => (
            <GithubCard
              name={repo.name}
              description={repo.description}
              language={repo.language}
              url={repo.clone_url}
              stargazers_count={repo.stargazers_count}
              forks_count={repo.forks_count}
              key={repo.name}
              updated_at={repo.updated_at}
            />
          ))}
        </SimpleGrid>
      </Box>
    </SlideFade>
  );
};

export default GithubSection;

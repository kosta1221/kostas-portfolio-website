import { Heading, SimpleGrid, SlideFade, Text, useColorModeValue } from "@chakra-ui/react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../constant";

export const ProjectsSection = () => {
  return (
    <SlideFade in offsetY={80} delay={0.2}>
      <Heading as="h1" fontSize={{ base: "24px", md: "30px", lg: "36px" }} mb={3}>
        Projects
      </Heading>
      <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={"lg"}>
        Check out some of my Web Development projects -
      </Text>

      <SimpleGrid columns={[1, 1, 2, 2]} mt={5}>
        {projects.map((project) => {
          return <ProjectCard key={project.name} project={project} />;
        })}
      </SimpleGrid>
    </SlideFade>
  );
};

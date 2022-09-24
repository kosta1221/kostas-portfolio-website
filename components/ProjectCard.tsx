import {
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MotionBox } from "../utils/motion";

interface ProjectCardProps {
  project: any;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <MotionBox whileHover={{ y: -5 }}>
      <LinkBox
        transition=".5s"
        cursor="pointer"
        p={4}
        display={{ md: "flex" }}
        borderWidth={1}
        margin={2}
        rounded={"10px"}
        _hover={{
          borderColor: "blue.500",
        }}
      >
        <LinkOverlay href={project?.url} rel="noopener" isExternal>
          <Flex alignItems="center" justifyContent="space-around" direction={{ base: "column" }}>
            <Image
              margin="auto"
              src={project.imageUrl}
              alt={project.alt}
              objectFit={"cover"}
              width={["200px", "400px", "400px", "400px"]}
              height={["100px", "300px", "300px", "300px"]}
            />
            <Flex flexDirection="column" ml={[0, 5, 5]} mt={[5, 5, 5, 5]}>
              <Heading as="h2" fontSize="lg" fontWeight="600" color={"blue.400"}>
                {project.name}
              </Heading>
              <Text textColor={textColor} mt={"10px"}>
                {project.summary}
              </Text>
            </Flex>
          </Flex>
        </LinkOverlay>
      </LinkBox>
    </MotionBox>
  );
};

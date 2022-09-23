import { Box, Heading, SlideFade, Text, useColorModeValue } from "@chakra-ui/react";
import MediumCard from "../components/MediumCard";
import { ArticlesProps } from "../pages/articles";

const MediumSection = ({ articles }: ArticlesProps) => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <SlideFade in offsetY={80} delay={0.2}>
      <Heading as="h1" fontSize={{ base: "24px", md: "30px", lg: "36px" }} mb={3}>
        Articles on Medium
      </Heading>
      <Text textColor={textColor}>
        My tech articles on Medium, hope you can find something that will ignite your curiosity
        among them 🔥
      </Text>
      <Box my={5}>
        {articles.map((article) => (
          <MediumCard article={article} key={article.title} />
        ))}
      </Box>
    </SlideFade>
  );
};

export default MediumSection;

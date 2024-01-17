import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  LightMode,
  Link,
  SlideFade,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiPhoneCall } from "react-icons/bi";
import Paragraph from "../components/Paragraph";

const ProfileSection = () => {
  return (
    <SlideFade in offsetX={80}>
      <Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as="h1" fontSize={{ base: "28px", md: "40px", lg: "48px" }} mb={3}>
            Hi, I&apos;m Kosta! <span className="waving-hand">👋</span>
          </Heading>
          <Flex alignItems={"flex-end"}>
            <Avatar name="Kosta K" src="/profile_picture.jpg" mb={5} size="xl" />
          </Flex>
        </Flex>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          Full-Stack & Cloud Developer, DevOps Consultant
        </Paragraph>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          Building clean and resilient backends using Python / NodeJS and TypeScript.{"\n"} Mainly use React with
          Tanstack query and modified Tailwind UI for client-side. Also passionate about improving CI/CD pipelines and
          optimizing kubernetes environments.
        </Paragraph>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          Check out some of my writing on{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.400")}
            href={process.env.MEDIUM_URL}
            fontWeight="500"
            isExternal
          >
            Medium
          </Link>
          . ✍🏻
        </Paragraph>

        <Box mt={5}>
          <LightMode>
            <ButtonGroup>
              <Link href={process.env.MAILTO_URL} style={{ textDecoration: "none" }}>
                <Button colorScheme="blue" size="sm" margin={"5px"} leftIcon={<BiPhoneCall color="white" />}>
                  Contact Me
                </Button>
              </Link>
            </ButtonGroup>
          </LightMode>
        </Box>
      </Box>
    </SlideFade>
  );
};

export default ProfileSection;

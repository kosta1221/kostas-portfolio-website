import { Box, Container, Flex, Heading, SlideFade, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { AiFillStar } from "react-icons/ai";
import UnderlinedText from "../components/UnderlinedText";
import Paragraph from "../components/Paragraph";
import styles from "../styles/Home.module.css";

function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Kosta | Full-Stack Developer" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <SlideFade in offsetX={80}>
            <Box>
              <UnderlinedText>
                <Flex alignItems={"center"}>
                  <Stack pr={3}>
                    <AiFillStar size={"30px"} />
                  </Stack>
                  <Heading>About Me</Heading>
                </Flex>
              </UnderlinedText>

              <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                I&apos;m a developer with 3 years of working experience in Fullstack Web Development, also working on
                various cloud projects, with a deep understanding of infrastructure and modern DevOps tools.
              </Paragraph>

              <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                I have been working on research of over 10 Api-gateways for integration of third-party security plugins
                in them, and thus have experience with a variety of different programming languages. This also required
                me to get good with tools which are not well documented and not widely-spread.
              </Paragraph>

              <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                I&apos;m also working on big enterprise-level projects which require research and a deep understanding
                of cloud-providers&apos; products.
              </Paragraph>

              <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                Another area which I specialize in, is improving CI/CD pipelines of big and small organizations alike,
                and making their deployment process as effiecient and seamless as possible. This is also done through
                improving their production cloud infrastructure and Kubernetes environments.
              </Paragraph>
            </Box>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
}

export default About;

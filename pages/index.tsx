import { Container, Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import ProfileSection from "../section/ProfileSection";
import TechStackSection from "../section/TechStackSection";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kosta | Home</title>
        <meta property="og:title" content="Kosta | Full-Stack Developer"></meta>
        <meta name="description" content="Kosta | Full-Stack Developer" />
        <link rel="icon" href="/profile_picture.png" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <ProfileSection />
          <Divider my={7} />
          <TechStackSection />
          <Divider my={7} />
          {/* <LiveProjectSection /> */}
        </Container>
      </main>
    </div>
  );
};

export default Home;

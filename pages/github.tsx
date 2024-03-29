import React from "react";
import { Container } from "@chakra-ui/react";
import Head from "next/head";
import getGithubRepos from "../constant/getGithubRepos";
import styles from "../styles/Home.module.css";
import GithubSection from "../section/GithubSection";

export interface GithubProps {
  repos: any[];
}

const Github = ({ repos }: GithubProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kosta | Github</title>
        <meta name="description" content="Kosta | Full-Stack Developer" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <GithubSection repos={repos} />
        </Container>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const repos = await getGithubRepos({ username: process.env.GITHUB_USERNAME! });

  return {
    props: {
      repos: repos || null,
    },
  };
}

export default Github;

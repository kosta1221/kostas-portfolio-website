import React from "react";
import { Container } from "@chakra-ui/react";
import Head from "next/head";
import MediumSection from "../section/MediumSection";
import styles from "../styles/Home.module.css";
import getMediumArticles from "../constant/getMediumArticles";

export interface ArticlesProps {
  articles: any[];
}

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kosta | Articles</title>
        <meta name="description" content="Kosta | Full-Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <MediumSection articles={articles} />
        </Container>
      </main>
    </div>
  );
};

export default Articles;

export async function getStaticProps() {
  const articles = await getMediumArticles({ username: process.env.MEDIUM_USERNAME! });
  console.log(articles);

  return {
    props: {
      articles: articles || null,
    },
  };
}

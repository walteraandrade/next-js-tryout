import Head from "next/head";
import React from "react";
import { Layout, siteTitle } from "../components/layout";
import { Typography } from "../components/typography";
import { getSortedPostsData } from "../lib/posts";
import { Styled } from "./index.styles";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Styled.HomeSection>
        <Typography.Body>
          Permanently in love with coffee, music, technology, photography,
          cinema, fantastic literature, games and nature. but not like we love
          our freedom.
        </Typography.Body>
        <Typography.Body>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </Typography.Body>
      </Styled.HomeSection>
      <Typography.H2Large>Blog</Typography.H2Large>
      <Styled.HomeSection>
        <ul>
          {allPostsData.map(({ id, title, date }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              <Typography.H3LightColor>{date}</Typography.H3LightColor>
            </li>
          ))}
        </ul>
      </Styled.HomeSection>
    </Layout>
  );
};

export default Home;

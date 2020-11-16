import Head from "next/head";
import React from "react";
import { Layout } from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import DateComponent from "../../components/date";
import { Typography } from "../../components/typography";

export const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Typography.H3LightColor>
        <DateComponent dateString={postData.date} />
      </Typography.H3LightColor>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export default Post;

export async function getStaticPaths({}) {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

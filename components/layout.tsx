import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Styled } from "./layout.style";
import { Typography } from "./typography";

const name = "Walter Andrade";
export const siteTitle = "Next.js Sample Website";

interface LayoutProps {
  home?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, home }) => {
  return (
    <Styled.LayoutWrapper>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og: image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Styled.Header>
        {home ? (
          <>
            <Styled.HeaderImage src="/profile.jpg" alt={name} />
            <Typography.H2XLarge>{name}</Typography.H2XLarge>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Styled.HeaderImage src="/profile.jpg" alt={name} />
              </a>
            </Link>
            <Typography.H2Large>
              <Link href="/">
                <Styled.HTMLATag>{name}</Styled.HTMLATag>
              </Link>
            </Typography.H2Large>
          </>
        )}
      </Styled.Header>
      <main>{children}</main>
      {!home && (
        <Styled.LinkWrapper>
          <Link href="/">
            <Styled.HTMLATag>← Back to home</Styled.HTMLATag>
          </Link>
        </Styled.LinkWrapper>
      )}
    </Styled.LayoutWrapper>
  );
};

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  column-gap: 10px;
  row-gap: 10px;
`;

// Components
import { Layout } from "components/Layout";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Product } from "../components/Product";
import { Quads } from "../components/Quads";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Quads Finance</title>
        <meta name="description" content="Avalanche's Index Fund Protocol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledGrid>
        <Nav />
        <Hero />
        <Product />
        <Quads />
      </StyledGrid>
    </div>
  );
};

export default Home;

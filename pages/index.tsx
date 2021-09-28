import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// Components
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Product } from "../components/Product";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Quads Finance</title>
        <meta name="description" content="Avalanche's Index Fund Protocol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;

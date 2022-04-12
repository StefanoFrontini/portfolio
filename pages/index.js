import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import projects from "../data/data.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stefano Frontini | Portfolio</title>
        <meta name="description" content="Stefano Frontini | Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container">
        <Hero />
        <Projects projects={projects} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

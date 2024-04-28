import Head from "next/head";
import Image from "next/image";
import { Inter, Poppins, Roboto} from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import Content from "@/components/content";


export default function Home() {
  return (
    <>
      <Head>
        <title>Afronauta</title>
        <meta name="description" content="Esse projecto é um pequeno teste para a vaga Front-end na Afronautas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Header />
          <Content />
      </main>
    </>
  );
}

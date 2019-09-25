import React from 'react';
import Head from "next/head"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import '../static/sass/main.scss';

export const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
     <div>
        <Head>
          <title>Test Next App</title>
          {/* <link rel="stylesheet" href="static/css/main.css" /> */}
          {/* <link rel="stylesheet" href="./next/dist/static/sass/main.scss" /> */}
          {/* <noscript><link rel="stylesheet" href="static/css/noscript.css" /></noscript> */}
        </Head>
        <div id="page-wrapper">
          <Header />
          <Main />
          <Footer />
        </div>
    </div>
  );
};

export default Index;

import React from 'react'
import Head from 'next/head'
import {Body} from './../components/index-body';
import { mainContent } from '../static/content';

const Home = () => (
  <div>
    <Head>
      <title>{mainContent.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/base.css" />
      <link href="https://fonts.googleapis.com/css?family=Pacifico|Pinyon+Script&display=swap" rel="stylesheet" />
    </Head>

    <Body />


    <style jsx global>
      {`
        html {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        body {
          background-color: #F6F8FB;
          padding: 0;
          margin: 0;
        }
      `}
    </style>
  </div>
)

export default Home

import React from 'react'
import Head from 'next/head'
import {Body} from './../components/index-body';
import { mainContent } from '../static/content';
import { css } from '../static/variables';

const Home = () => (
  <div>
    <Head>
      <title>{mainContent.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/base.css" />
      <link href="https://fonts.googleapis.com/css?family=Pacifico|Pinyon+Script|Source+Sans+Pro:300&display=swap" rel="stylesheet" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
          background-color: ${css.colors.body};
          padding: 0;
          margin: 0;
        }
      `}
    </style>
  </div>
)

export default Home

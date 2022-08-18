/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const ShopItem: NextPage<{ title?: string; desc?: string }> = (props) => {
  return (
    <div className="wrapper">
      <div className="background">
        <div className="header">
          <div className="title">{props.title}</div>
          <div className="desc">{props.desc}</div>
        </div>
        <div className="body">
          <div className="item">1</div>
          <div className="item">2</div>
          <div className="item">2</div>
          <div className="item">2</div>
        </div>

        <button className="btn-preorder">Preorder →</button>
      </div>

      <style jsx={true}>{`
        div.wrapper {
          display: flex;
          justify-content: center;
          height: 100%;
          background-color: black;
        }

        div.background {
          position: relative;
          width: 100%;
          height: 100%;
          padding-top: 8px;
          padding-right: 8px;
          padding-left: 8px;
          color: black;
          height: 100%;
          max-width: 360px;
          overflow: hidden;
        }

        .header {
          display: flex;
          background-color: black;
          color: white;
        }

        .header > .title {
          flex: 1;
          font-family: Monument Grotesk;
          font-size: 28px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: -0.03em;
          text-align: left;
        }

        .header > .desc {
          flex: 1;
          font-size: 12px;
          font-weight: 400;
          line-height: 12px;
          letter-spacing: 0em;
          text-align: left;
          white-space: pre-wrap;
        }

        .body {
          display: flex;
          flex-direction: column;
          background-color: black;
          margin-top: 16px;
        }

        .body > .item {
          color: white;
          height: 200px;
          background-color: yellow;
          margin-top: 4px;
        }

        .btn-preorder {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 40px;
          background-color: white;
          color: black;
          font-family: Monument Grotesk;
          font-size: 20px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

ShopItem.getInitialProps = ({ req, query }): { title?: string; desc?: string } => {
  const { id } = query;

  let title;
  let desc;

  switch (query.id) {
    case "poster": {
      title = "Poster";
      desc =
        "Specification;\n\nB1 Size (70*100cm)\nDigital Print\nPrinted in Germany\nLimited Prints (20 Copies)\nDesigned by CH42 Munich";
      break;
    }
    case "drip-bag": {
      title = "Drip Bag";
      desc = "Specification;\n\nColombia 50%\nGuatemala 30%\nKenya 20%\nProduced by Momento Brewers";
      break;
    }
    case "t-shirts": {
      title = "T Shirts";
      desc =
        "Specification;\n\nSilkscreen Printed\nPrintstar Heavy Weight\n250g/m², 7.4oz, Cotton 100%\n-----\nSize (L: Length, S: Shoulder)\nM - L:70, S:47\nL - L:74, S:50\nXL - L:78, S:53\n-----\nDesigned by CH42 Munich";
      break;
    }
  }

  return { title, desc };
};

export default ShopItem;

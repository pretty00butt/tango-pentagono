/* eslint-disable @next/next/inline-script-id */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Script from "next/script";
import { useState } from "react";

const Shop: NextPage = () => {
  const router = useRouter();

  const handleClickDripBag = () => {
    router.push("/shop/drip-bag");
  };
  const handleClickPoster = () => {
    router.push("/shop/poster");
  };
  const handleClickTShirts = () => {
    router.push("/shop/t-shirt");
  };

  return (
    <div className="wrapper">
      <div className="background">
        <div className="shop">
          <div className="item item-poster" onClick={handleClickPoster}>
            <div className="dimmed" />
            <div className="title">Poster</div>
            <div className="desc">Preorder →</div>
          </div>
          <div className="item item-t-shirt" onClick={handleClickTShirts}>
            <div className="dimmed" />
            <div className="title">T Shirt</div>
            <div className="desc">Preorder →</div>
          </div>
          <div className="item item-drip-bag" onClick={handleClickDripBag}>
            <div className="dimmed" />
            <div className="title">Drip Bag</div>
          </div>
          <div className="footer">
            <div>
              Tango
              <br />
              Pentágono
            </div>
            <div>
              Place;
              <br />
              Momento Brewers
              <br />
              11-1, Sangwon 6 Gil, <br />
              Sungdong Gu, Seoul KR
              <br />
              <br />
              Concert; <br />
              Aftwerwork Tango
              <br />
              <br />
              Host; <br />
              ftto Creatives
            </div>
          </div>
        </div>
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
          background: white;
          color: black;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-width: 360px;
        }

        .shop {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 102;
          background-color: black;
        }

        .shop > .item,
        .shop > .footer {
          display: flex;
          flex: 1;
          color: white;
          padding: 8px;
          cursor: pointer;
        }

        .shop > .footer > div {
          flex: 1;
          font-size: 12px;
          font-weight: 400;
          line-height: 12px;
          letter-spacing: 0em;
          text-align: left;
        }

        .shop > .item {
          position: relative;
          mix-blend-mode: luminosity;
        }

        .shop > .item > .dimmed {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.6);
        }

        .shop > .item.item-poster {
          background-image: url(/menus/poster.jpg);
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .shop > .item.item-t-shirt {
          background-image: url(/menus/t-shirt.jpg);
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .shop > .item.item-drip-bag {
          background-image: url(/menus/drip-bag.jpg);
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .shop > .item > .title {
          flex: 1;
          font-size: 28px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: -0.03em;
          text-align: left;
          z-index: 100;
        }

        .shop > .item > .desc {
          flex: 1;
          font-size: 12px;
          font-weight: 400;
          line-height: 12px;
          letter-spacing: 0em;
          text-align: right;
        }
      `}</style>

      <Script async={true} src="https://www.googletagmanager.com/gtag/js?id=G-F4KC0Z5JHN" />
      <Script>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'G-F4KC0Z5JHN');
      `}
      </Script>
    </div>
  );
};

export default Shop;

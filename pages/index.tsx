/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Logo from "public/tango-pentagono.svg";
import Triangle from "public/triangle.svg";
import Image from "next/image";
import { useState } from "react";
import ShopComponent from "components/Shop";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const handleClickShop = () => {
    router.push("/shop");
  };

  return (
    <div className="wrapper">
      <div className="background">
        <div className="triangles">
          <div />
          <div />
          <div />
        </div>
        <div className="text upper">
          <div className="text__upper">
            <div className="text__upper__left">
              Place;
              <br />
              Momento Brewers
              <br />
              11-1, Sangwon 6 Gil,
              <br />
              Sungdong Gu, Seoul KR
              <br />
              <br />
              Concert;
              <br />
              Aftwerwork Tango
              <br />
              Host; ftto Creatives
            </div>

            <ol className="text__upper__right">
              <li>1. Por una cabeza</li>
              <li>2. Lo que vendra</li>
              <li>3. Romance del diablo</li>
              <li>4. Jeanne y paul</li>
              <li>5. Introduction al angel</li>
              <li>6. Eramos tan jovenes</li>
              <li>7. Mumuki</li>
              <li>8. Concierto para quinteto</li>
            </ol>
          </div>
          <div className="text__middle">
            <div className="text__middle__left">
              Momento
              <br />
              Brewers
              <br />
              Sunday
              <br />
              25th
              <br />
              September
              <br />
              6:30 PM
              <br />
            </div>
            <div className="text__middle__right">
              Bandoneon
              <br />
              Oh Seheon
              <br />
              Violin
              <br />
              Kim Yejin
              <br />
              Piano
              <br />
              Hwang Jeesu
              <br />
            </div>
          </div>
          <div className="text__bottom">
            <div>
              MOMENTO
              <br />
              BREWERS
            </div>
            <div>FTTO</div>
            <div>
              AFTERWORK
              <br />
              TANGO
            </div>
          </div>
        </div>

        <div className="logo">
          <Image alt="tango pentagono" src="/tango-pentagono.svg" width="360px" height="132px" />
        </div>
        <div className="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="text__rolling__wrapper">
          <div className="text__rolling__inner">
            <div className="text__rolling">"PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES"</div>
          </div>
        </div>

        <button className="btn-shop" onClick={handleClickShop}>
          Shop →
        </button>
      </div>

      <style jsx={true}>{`
        div.wrapper {
          display: flex;
          justify-content: center;
          height: 100%;
          background-color: white;
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

        .triangles {
          display: flex;
          gap: 4px;
          position: absolute;
          top: 8px;
          right: 8px;
          bottom: 0px;
          left: 8px;
          z-index: 100;
        }

        .triangles > div {
          flex-grow: 1;
          height: 100%;
          background-image: url("/triangle.svg");
          background-repeat: no-repeat;
          background-position: 0 0;
          background-size: 100% 100%;
        }

        .triangles > div {
          flex-grow: 1;
          height: 100%;
          background-image: url("/triangle.svg");
          background-repeat: no-repeat;
          background-position: 0 0;
          background-size: 100% 100%;
        }

        .text {
          width: 100%;
          z-index: 101;
        }

        .text > div {
          display: flex;
        }

        .text > .text__upper > .text__upper__right,
        .text > .text__middle > .text__middle__right {
          margin-left: 8px;
        }

        .text > .text__upper > .text__upper__left,
        .text > .text__upper > .text__upper__right,
        .text > .text__middle > .text__middle__left,
        .text > .text__middle > .text__middle__right {
          flex: 1;
        }

        .text__upper {
          color: #666666;
          font-size: 12px;
          font-weight: 400;
          line-height: 12px;
          letter-spacing: 0em;
          text-align: left;
        }

        .text__middle {
          color: #666666;
          font-size: 28px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: -0.03em;
          text-align: left;
          margin-top: 8px;
        }

        .text__bottom {
          color: white;
          display: flex;
          margin-top: 8px;
        }

        .text__bottom > div {
          flex: 1;
          text-align: center;
          font-size: 10px;
          font-weight: 400;
          line-height: 10px;
          letter-spacing: 0em;
          text-align: center;
        }

        .logo {
          position: absolute;
          left: auto;
          right: auto;
          bottom: 64px;
          z-index: 101;
        }

        .numbers {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 64px;
          display: flex;
          z-index: 101;
        }

        .numbers > div {
          flex: 1;
          text-align: center;
          color: white;
          font-size: 10px;
          font-weight: 400;
          line-height: 10px;
          letter-spacing: 0em;
          text-align: center;
        }

        .text__rolling__wrapper {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 40px;
          width: 100%;
          background-color: black;
          display: flex;
          justify-content: center;
          height: 20px;
          z-index: 101;
          overflow: hidden;
        }

        .text__rolling__inner {
          background-color: white;
          width: 360px;
          height: 100%;
        }

        .text__rolling {
          width: 100%;
          height: 100%;
          background-color: transparent;
          color: black;
          white-space: nowrap;
          animation: scrollText 15s infinite linear;
          display: flex;
          flex-direction: column;
          justify-content: center;

          font-size: 10px;
          font-weight: 400;
          line-height: 14px;
          letter-spacing: 0em;
          text-align: center;
        }

        @keyframes scrollText {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .btn-shop {
          position: absolute;
          width: calc(100% - 16px);
          height: 40px;
          background-color: black;
          color: white;
          cursor: pointer;
          bottom: 0px;
          z-index: 101;

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

export default Home;

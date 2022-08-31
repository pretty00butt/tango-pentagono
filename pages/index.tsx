/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const DEFAULT_MARGIN = 8;
const text =
  "PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES PARA MÍ, EL TANGO SIEMPRE FUE PARA EL OÍDO MÁS QUE PARA LOS PIES ";

const Home: NextPage = () => {
  const [nightColor, setNightColor] = useState(false);
  const [browserSize, setBrowserSize] = useState(0);
  const [components, setComponents] = useState([
    <div key="1" className="text__rolling__content">
      {text}
    </div>,
    <div key="2" className="text__rolling__content">
      {text}
    </div>,
  ]);
  const router = useRouter();

  const handleClickScreen = () => {
    setNightColor(!nightColor);
  };

  const handleClickShop = () => {
    router.push("/shop");
  };

  const duplicateAnimatedText = () => {
    setComponents([
      ...components,
      <div key={components.length + 1} className="text__rolling__content">
        {text}
      </div>,
    ]);
  };

  setInterval(() => {
    duplicateAnimatedText();
  }, 3000);

  useEffect(() => {
    setBrowserSize(window.innerWidth);

    window.onresize = () => {
      setBrowserSize(window.innerWidth);
    };
  }, []);

  return (
    <div className="wrapper" onClick={handleClickScreen}>
      <div className="background">
        <div className="triangles">
          <div />
          <div />
          <div />
        </div>
        <div className="text upper">
          <div className="text__upper">
            <div className="text__upper__left">
              <div>
                Place;
                <br />
                Momento Brewers
                <br />
                11-1, Sangwon 6 Gil,
                <br />
                Sungdong Gu, Seoul KR
              </div>
              <div>
                Concert;
                <br />
                Aftwerwork Tango
                <br />
                Host; ftto Creatives
              </div>
            </div>

            <ol className="text__upper__right">
              <div>
                <li>1. Por una cabeza</li>
                <li>2. Lo que vendra</li>
                <li>3. Romance del diablo</li>
                <li>4. Jeanne y paul</li>
              </div>
              <div>
                <li>5. Introduction al angel</li>
                <li>6. Eramos tan jovenes</li>
                <li>7. Mumuki</li>
                <li>8. Concierto para quinteto</li>
              </div>
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
        </div>
        <div className="teams">
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

        <div className="logo">
          {/* <Image
            alt="tango pentagono"
            src="/tango-pentagono-desktop.svg"
            width={`${browserSize}px`}
            height={`${browserSize * 0.14}px`}
          /> */}
        </div>
        <div className="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="text__rolling__wrapper">
          <div className="text__rolling__inner">
            <div className="text__rolling">{components}</div>
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
          padding-top: ${DEFAULT_MARGIN}px;
          padding-right: ${DEFAULT_MARGIN}px;
          padding-left: ${DEFAULT_MARGIN}px;
          background: white;
          color: black;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-width: 360px;
        }

        @media (min-width: 1440px) {
          div.wrapper {
            background-color: ${nightColor ? "black" : "white"};
          }

          div.background {
            max-width: 100%;
            padding-top: ${DEFAULT_MARGIN * 2}px;
            padding-right: ${DEFAULT_MARGIN * 2}px;
            padding-left: ${DEFAULT_MARGIN * 2}px;
            background-color: ${nightColor ? "black" : "white"};
          }
        }

        .triangles {
          display: flex;
          gap: 4px;
          position: absolute;
          top: ${DEFAULT_MARGIN}px;
          right: ${DEFAULT_MARGIN}px;
          bottom: 0px;
          left: ${DEFAULT_MARGIN}px;
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

        @media (min-width: 1440px) {
          .triangles {
            z-index: ${nightColor ? "100" : "102"};
            top: ${DEFAULT_MARGIN * 2}px;
            right: ${DEFAULT_MARGIN * 2}px;
            bottom: 0px;
            left: ${DEFAULT_MARGIN * 2}px;
          }

          .triangles > div {
            background-image: ${nightColor ? `url("/triangle-night.svg")` : `url("/triangle-desktop.svg")`};
          }
        }

        .text {
          width: 100%;
          z-index: 101;
        }

        .text > div {
          display: flex;
        }

        .text > .text__upper {
          overflow: hidden;
        }

        .text > .text__upper > .text__upper__left,
        .text > .text__upper > .text__upper__right {
          display: flex;
          flex-direction: column;
        }

        .text > .text__upper > .text__upper__right,
        .text > .text__middle > .text__middle__right {
          margin-left: ${DEFAULT_MARGIN}px;
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
          margin-top: ${DEFAULT_MARGIN}px;
        }

        @media (min-width: 1440px) {
          .text {
            z-index: ${nightColor ? 103 : 101};
          }

          .text__upper,
          .text__middle {
            color: ${nightColor ? "white" : "#666"};
          }

          .text > .text__upper > .text__upper__left,
          .text > .text__upper > .text__upper__right {
            flex-direction: row;
          }

          .text > .text__upper > .text__upper__left > div,
          .text > .text__upper > .text__upper__right > div {
            flex: 1;

            font-size: 1.7vw;
            line-height: 1.7vw;
          }

          .text__middle {
            font-size: 6.5vw;
            line-height: 6.5vw;
          }
        }

        .teams {
          color: white;
          display: flex;
          margin-top: ${DEFAULT_MARGIN}px;
          position: absolute;
          top: 50vh;
          left: 0;
          right: 0;
          z-index: 102;
        }

        .teams > div {
          flex: 1;
          text-align: center;
          font-size: 10px;
          font-weight: 400;
          line-height: 10px;
          letter-spacing: 0em;
          text-align: center;
        }

        @media (min-width: 1440px) {
          .teams > div {
            font-size: 1.7vw;
            line-height: 1.7vw;
            color: ${nightColor ? "black" : "white"};
          }
        }

        .logo {
          position: absolute;
          left: auto;
          right: auto;
          bottom: 64px;
          z-index: 102;
        }

        @media (min-width: 1440px) {
          .logo {
            position: absolute;
            width: 100%;
            height: 13.4vw;
            left: 0;
            right: 0;
            bottom: 4.5vw;
            background-image: ${nightColor
              ? `url("/tango-pentagono-night.svg")`
              : `url("/tango-pentagono-desktop.svg")`};
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
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

        @media (min-width: 1440px) {
          .numbers {
            line-height: 0.7vw;
            bottom: 0.05vw;
          }

          .numbers > div {
            font-size: 1.7vw;
            color: ${nightColor ? "black" : "white"};
          }
        }

        .text__rolling__wrapper {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 40px;
          width: 100%;
          background-color: white;
          display: flex;
          justify-content: center;
          height: 20px;
          z-index: 102;
          overflow: hidden;
        }

        .text__rolling__inner {
          width: 360px;
          height: 100%;
        }

        .text__rolling {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 100%;
          flex: 1;
          background-color: transparent;
          color: black;
          white-space: nowrap;
          font-size: 10px;
          font-weight: 400;
          line-height: 14px;
          letter-spacing: 0em;
          text-align: center;
          animation: scrollText 30s linear;
        }

        @media (min-width: 1440px) {
          .text__rolling__wrapper {
            height: 3.9vw;
            bottom: 0px;
            background-color: ${nightColor ? "black" : "white"};
          }

          .text__rolling {
            font-size: 2.8vw;
            line-height: 2.8vw;
            color: ${nightColor ? "#1E1E1E" : "black"};
          }
        }

        @keyframes scrollText {
          from {
            transform: translateX(0);
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

        @media (min-width: 1440px) {
          .btn-shop {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

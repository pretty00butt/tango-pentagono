import type { NextComponentType } from "next";
import Head from "next/head";

import config from "config";

const ShopComponent: NextComponentType = () => {
  return (
    <div className="modal-shop">
      <div>Poster</div>
      <div>T Shirts</div>
      <div>Drip Bag</div>
      <div>4</div>

      <style jsx={true}>{`
        .modal-shop {
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

        .modal-shop > div {
          flex: 1;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default ShopComponent;

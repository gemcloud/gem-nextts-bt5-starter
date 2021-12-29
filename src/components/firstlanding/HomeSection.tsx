import { t, Trans } from "@lingui/macro";
import React from "react";
import Image from "next/image";

const HomeSection = ({ parameter }: { parameter: string }): JSX.Element => {
  return (
    <section className="home-section active">
      <h1 className="hero-heading">
        <Trans>
          hello, i am <br /> Nick Name
        </Trans>
      </h1>
      <img src="/assets/images/amazing/home.png" className="home-img" alt="" />

      {/* <Image
        className="home-img"
        src="/assets/images/amazing/home.png"
        alt=""
        quality={100}
        height="100%"
        width="100%"
        objectFit="cover"
      /> */}
    </section>
  );
};

export default HomeSection;

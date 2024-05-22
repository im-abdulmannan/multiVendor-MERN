import React from "react";
import styles from "../../../styles/style";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[0=60%]`}>
        <h1
          className={`text-[35px] leading[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600 capitalize]`}
        >
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut officiis
          temporibus < br/> tempore ex quia, tenetur iure voluptatum fugiat ullam
          quaerat < br/> odit, quidem at, facilis labore itaque? Aut pariatur nostrum
          repellat.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-Poppins text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

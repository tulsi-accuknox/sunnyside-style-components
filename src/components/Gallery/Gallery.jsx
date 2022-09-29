import React from "react";
import "../Gallery/Gallery.css";
import styled from "styled-components";
import {motion} from 'framer-motion'

export const MyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  flex-direction: column;
  padding: 10rem;
`;

const SecondDiv = styled(MyDiv)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 25rem;
`;

const Gallery = () => {
  return (
    <div>
      <section className="main grid grid-cols-2">
        <MyDiv >
          <h2 className="font-bold text-6xl text-[#4f4f4f]">
            Transfrom your brand
          </h2>
          <p className="text-xl text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum
            laudantium ut esse mollitia, necessitatibus, numquam incidunt
            possimus, assumenda laboriosam officiis natus veniam commodi.
          </p>
          <h3 className="uppercase text-3xl">Learn More</h3>
        </MyDiv>
        <div className="first-2">
          <img src="/images/image-transform.jpg" alt="" />
        </div>
        <div className="second-1">
          <img src="/images/image-stand-out.jpg" alt="" />
        </div>
        <MyDiv>
          <h2 className="font-bold text-6xl text-[#4f4f4f]">
            Transfrom your brand
          </h2>
          <p className="text-xl text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum
            laudantium ut esse mollitia, necessitatibus, numquam incidunt
            possimus, assumenda laboriosam officiis natus veniam commodi.
          </p>
          <h3 className="uppercase text-3xl">Learn More</h3>
        </MyDiv>
        <div className="apple">
          <SecondDiv>
            <h2 className="font-bold text-5xl">Graphic Design</h2>
            <p className="text-center mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              explicabo inventore ipsa tempora quod? Neque itaque suscipit odio
              labore ab deleniti corporis provident magni.
            </p>
          </SecondDiv>
        </div>
        <div className="orange">
          <SecondDiv>
            <h2 className="font-bold text-5xl">Photography</h2>
            <p className="text-center mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              explicabo inventore ipsa tempora quod? Neque itaque suscipit odio
              labore ab deleniti corporis provident magni.
            </p>
          </SecondDiv>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

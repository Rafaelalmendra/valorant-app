import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

import Agent from '../../components/Agent';

export default function Agentes() {
  return (
    <>
      <Head>
        <title>Valorant Guide | Agentes</title>
      </Head>
      <div data-aos="zoom-in">
        <Swiper
          className="margin"
          navigation 
          loop
        >
          <SwiperSlide>
            <Agent />
          </SwiperSlide>
          <SwiperSlide>
            <Agent />
          </SwiperSlide>
          <SwiperSlide>
            <Agent />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
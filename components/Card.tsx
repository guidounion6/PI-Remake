
"use client"

import React, { useRef, useState } from "react";
import characters from '@/data'
import { Url } from 'url'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import "swiper/css";

import "../app/globals.css";

import 'swiper/css/bundle'

const Card = ({ id, name, status, species, gender, origin, image }: { id: number, name: string, status: string, species: string, gender: string, origin: string, image: Url }) => {
    
    const char = characters
   
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={1}
            grabCursor={true}
            speed={500}
            parallax={true}
            pagination={{
                clickable: true,
            }}
            modules={[Parallax]}
            className="mySwiper">
            {char.map((c, index) => {
                return (
                    <SwiperSlide key={index} className="rounded-xl">
                        <div
                            slot="container-start"
                            className="parallax-bg w-[300px] h-[300px] rounded-xl"
                            style={{ backgroundImage: `url(${c.image})` }}
                        >
                            <h1 className="font-extrabold text-3xl text-cyan-300 font-outline-1">{c.name}</h1>
                            <div className="flex flex-col text-black h-[260px] align-center justify-end items-start pl-2">
                                <h2 className="text-m text-xl font-extrabold text-lime-300 font-outline-1" >{c.status}</h2>
                                <h2 className="text-m text-xl font-extrabold text-lime-300 font-outline-1">{c.species}</h2>
                                <h2 className="text-m text-xl font-extrabold text-lime-300 font-outline-1" >{c.gender}</h2>
                                <h2 className="text-m text-xl font-extrabold text-lime-300 font-outline-1" >{c.origin.name}</h2 >
                            </div>

                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>


    )
}

export default Card
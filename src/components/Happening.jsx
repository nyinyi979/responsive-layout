import React from "react";
import img1 from "../images/3.jpg";
import img2 from "../images/4.jpg";
import img3 from "../images/7.jpeg";
import img4 from "../images/8.jpg";
import img5 from "../images/1.jpg";
import Time from "./Time";
import "swiper/css";
import "swiper/css/navigation";
import "./Happening.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
export default function Happening() {
  return <HappeningCarousel />;
}

const HappeningCarousel = () => {
  const news = [
    {
      large: [
        {
          img: img1,
          category: "Travel",
          title: "Sample title",
          text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
          posted: "2 min",
          by: "Dave",
        },
        {
          img: img2,
          category: "CITY",
          title: "Sample title",
          text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
          posted: "2 min",
          by: "Dave",
        },
      ],
      small: [
        {
          img: img3,
          category: "TRAVEL",
          title: "Sample title",
          text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
          posted: "2 min",
          by: "Dave",
        },
        {
          img: img4,
          category: "CITY",
          title: "Sample title",
          text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
          posted: "2 min",
          by: "Dave",
        },
        {
          img: img5,
          category: "TRAVEL",
          title: "Sample title",
          text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
          posted: "2 min",
          by: "Dave",
        },
      ],
    },{
      large: [
        {
          img: img1,
          category: "Travel",
          title: "Sample title",
          text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
          posted: "2 min",
          by: "Dave",
        },
        {
          img: img2,
          category: "CITY",
          title: "Sample title",
          text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
          posted: "2 min",
          by: "Dave",
        },
      ],
      small: [
        {
          img: img3,
          category: "TRAVEL",
          title: "Sample title",
          text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
          posted: "2 min",
          by: "Dave",
        },
        {
          img: img4,
          category: "CITY",
          title: "Sample title",
          text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
          posted: "2 min",
          by: "Dave",
        },
        {
          img: img5,
          category: "TRAVEL",
          title: "Sample title",
          text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
          posted: "2 min",
          by: "Dave",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="flex heading">
        <p>HAPPENING NOW</p>
        <div className="flex">
          <button className="news-btn happen-prev">&lt;</button>
          <button className="news-btn happen-next">&gt;</button>
        </div>
      </div>
      <Swiper
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".happen-next", prevEl: ".happen-prev" }}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Navigation]}
      >
        {news.map((n, index) => (
          <SwiperSlide>
          <div key={index} className="happening">
            <div className="large">
              {n.large.map((l, index) => (
                <div key={l.title + index} className="large-item flex-col">
                  <img src={l.img} alt={l.title} />
                  <p className="cat">{l.category.toUpperCase()}</p>
                  <div className="flex-col l-text">
                    <p className="title">{l.title}</p>
                    <p className="text">{l.text}</p>
                    <p className="ago flex">
                      <Time fill="rgb(193, 193, 193)" />
                      {l.posted} ago <span className="by">by <span>{l.by}</span></span>
                    </p>
                   
                  </div>
                </div>
              ))}
            </div>
            <div className="small">
              {n.small.map((s, index) => (
                <div key={s.title + index} className="small-item flex-col">
                  <img src={s.img} alt={s.text} />
                  <p>{s.title}</p>
                  <p className="ago flex">
                    <Time />
                    <span>{s.posted} ago</span>
                    <span className="by">by <span>{s.by}</span></span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

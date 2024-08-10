import React from "react";
import img1 from "../images/2.jpg";
import img2 from "../images/3.jpg";
import img3 from "../images/4.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "./Trending.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Time from "./Time";
export default function Trending() {
  return (
    <div className="flex-col trending">
      <TrendingCarousel />
    </div>
  );
}

const TrendingCarousel = () => {
  const news = [
    {
      img: img1,
      title: "Sample title",
      text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
      posted: "2 min",
    },
    {
      img: img2,
      title: "Sample title",
      text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
      posted: "2 min",
    },
    {
      img: img3,
      title: "Sample title",
      text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
      posted: "2 min",
    },
    {
      img: img1,
      title: "Sample title",
      text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
      posted: "2 min",
    },
    {
      img: img2,
      title: "Sample title",
      text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
      posted: "2 min",
    },
    {
      img: img3,
      title: "Sample title",
      text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
      posted: "2 min",
    },
  ];
  return (
    <div>
      <div className="flex heading">
        <p>TRENDING</p>
        <div className="flex">
          <button className="news-btn trend-prev">&lt;</button>
          <button className="news-btn trend-next">&gt;</button>
        </div>
      </div>
      <Swiper
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".trend-next", prevEl: ".trend-prev" }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          576: {slidesPerView: 2},
          768: {slidesPerView: 3}
        }}
        modules={[Navigation]}
      >
        {news.map((n, index) => (
          <SwiperSlide key={n.title + index}>
            <div className="flex-col trend-new">
              <div className="img-box">
                <img src={n.img} alt={n.title} className="img" />
              </div>
              <div className="flex-col trend-text">
                <span className="title">{n.title}</span>
                <span className="text">{n.text}</span>
                <span className="ago flex">
                  <Time />
                  {n.posted} ago
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

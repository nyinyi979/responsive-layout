import "./Legend.css";
import React from "react";
import img1 from "../images/1.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Time from "./Time";

export default function Legend() {
  return (
    <div className="legend">
      <div className="lg-img">
        <img src={img1} alt="legend image" className="img" />
        <div className="flex-col lg-text">
          <p>WORLD NEWS</p>
          <p className="flex-col lg-p">
            <span>Amazing places in America to visit.</span>
            <span>
              For some reason - this country, this city, this neighborhood, this
              particular street, is the place you are living a majority of your
              life in
            </span>
            <button>Learn More</button>
          </p>
        </div>
      </div>
      <ClientWordsCarousel />
    </div>
  );
}

const ClientWordsCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const incrementIndex = () =>
    activeIndex + 1 <= clientWords.length && setActiveIndex(activeIndex + 1);
  const decrementIndex = () =>
    activeIndex - 1 >= 0 && setActiveIndex(activeIndex - 1);
  const newsList = [
    [
      {
        id: 1,
        category: "Travel",
        title: "Article Title",
        text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
        posted: "2 mins",
      },
      {
        id: 2,
        category: "Travel",
        title: "Article Title",
        text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
        posted: "2 mins",
      },
    ],
    [
      {
        id: 1,
        category: "Travel",
        title: "Article Title",
        text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
        posted: "2 mins",
      },
      {
        id: 2,
        category: "Travel",
        title: "Article Title",
        text: "Lorem ipsum dolor sit, ametoremque quibusdam similique minima amet...",
        posted: "2 mins",
      },
    ],
  ];
  return (
    <div className="carousel">
      <div className="flex news-heading">
        <p>More News</p>
        <div className="flex">
          <button className="news-btn news-prev">&lt;</button>
          <button className="news-btn news-next">&gt;</button>
        </div>
      </div>
      <Swiper
        className="w-full fit relative rounded-t-2xl rounded-b-[32px] shadow-client"
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".news-next", prevEl: ".news-prev" }}
        spaceBetween={30}
        slidesPerView={1}
        onRealIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Navigation]}
      >
        {newsList.map((news, index) => (
          <SwiperSlide key={index}>
            <div className="flex-col slide">
              {news.map((n) => (
                <div key={n.id} className="flex-col new">
                  <p className="category">{n.category.toUpperCase()}</p>
                  <div className="flex-col">
                    <p className="title">{n.title}</p>
                    <p className="text">{n.text}</p>
                    <p className="flex ago">
                      <Time />
                      {n.posted} ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

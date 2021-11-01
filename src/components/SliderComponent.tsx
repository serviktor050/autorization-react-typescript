import React from "react";
import AliceCarousel from "react-alice-carousel";

export const SliderComponent: React.FC = () => {
  const slides = [
    {
      id: 1,
      img: "https://img4.goodfon.ru/original/1280x720/f/4f/nature-priroda-peizazh-1.jpg",
      title: "Picture 1",
    },
    {
      id: 2,
      img: "https://img5.goodfon.ru/original/1280x720/6/ea/gory-zima-sneg-sklony.jpg",
      title: "Picture 2",
    },
    {
      id: 3,
      img: "https://img5.goodfon.ru/original/1280x720/a/35/kaliforniia-ssha-okean-priroda-bereg-solntse-skaly.jpg",
      title: "Picture 3",
    },
    {
      id: 4,
      img: "https://img4.goodfon.ru/original/1280x720/6/87/spring-park-vesna-park-priroda-nature.jpg",
      title: "Picture 4",
    },
    {
      id: 5,
      img: "https://img5.goodfon.ru/original/1280x720/b/a9/more-bereg-zakat-18.jpg",
      title: "Picture 5",
    },
    {
      id: 6,
      img: "https://img3.goodfon.ru/original/1280x720/2/ef/nebo-oblaka-gory-cvety-4025.jpg",
      title: "Picture 6",
    },
  ];

  return (
    <>
      <AliceCarousel
        autoPlay={true}
        infinite={true}
        autoPlayInterval={1000}
        animationType={"fadeout"}
        disableButtonsControls={true}
      >
        {slides.map((slide) => (
          <div className="banner" key={slide.id}>
            <img src={slide.img} alt={slide.title} />
          </div>
        ))}
      </AliceCarousel>
    </>
  );
};

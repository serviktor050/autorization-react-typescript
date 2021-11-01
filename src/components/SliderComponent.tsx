import React from "react";
import AliceCarousel from "react-alice-carousel";

export const SliderComponent: React.FC = () => {
  const slides = [
    {
      id: 1,
      img: "https://images.wallpaperscraft.ru/image/single/reka_holmy_bereg_224563_1280x720.jpg",
      title: "Picture 1",
    },
    {
      id: 2,
      img: "https://images.wallpaperscraft.ru/image/single/reka_bereg_derevia_202433_1280x720.jpg",
      title: "Picture 2",
    },
    {
      id: 3,
      img: "https://images.wallpaperscraft.ru/image/single/reka_bereg_derevia_169432_1280x720.jpg",
      title: "Picture 3",
    },
    {
      id: 4,
      img: "https://images.wallpaperscraft.ru/image/single/reka_bereg_derevia_162056_1280x720.jpg",
      title: "Picture 4",
    },
    {
      id: 5,
      img: "https://images.wallpaperscraft.ru/image/single/reka_skaly_derevia_191359_1280x720.jpg",
      title: "Picture 5",
    },
    {
      id: 6,
      img: "https://images.wallpaperscraft.ru/image/single/reka_skaly_derevia_196000_1280x720.jpg",
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

import React from "react";
import AliceCarousel from "react-alice-carousel";

export const SliderComponent: React.FC = () => {
  const slides = [
    {
      id: 1,
      img: "https://www.w3schools.com/howto/img_nature_wide.jpg",
      title: "Picture 1",
    },
    {
      id: 2,
      img: "https://www.w3schools.com/howto/img_snow_wide.jpg",
      title: "Picture 2",
    },
    {
      id: 3,
      img: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      title: "Picture 3",
    },
    {
      id: 4,
      img: "https://www.w3schools.com/howto/img_5terre_wide.jpg",
      title: "Picture 4",
    },
    {
      id: 5,
      img: "https://www.w3schools.com/howto/img_lights_wide.jpg",
      title: "Picture 5",
    },
    {
      id: 6,
      img: "https://www.w3schools.com/howto/img_woods_wide.jpg",
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

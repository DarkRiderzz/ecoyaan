import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import value from "./data/hero.json";

function HeroSection() {
  const data = value.data;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="section-hero">
      <Slider {...settings}>
        {data.map((el) => (
          <Hero el={el} />
        ))}
      </Slider>
    </section>
  );
}

function Hero({ el }) {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1 className={`hero-header ${el.class}`}>{el.heading}</h1>
          <p className="hero-para">{el.para}</p>
          <button>{el.buttonText}</button>
        </div>
        <div className="hero-img">
          <img className="hero-img" src={el.img} alt="hero" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;

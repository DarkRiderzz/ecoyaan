import Team from "./Team";
import Middle from "./Middle";
function AboutUs() {
  return (
    <>
      <HeroSection />
      <Middle />
      <Team />
    </>
  );
}

function HeroSection() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div
          className="hero-text about-header-text"
          style={{ overflow: "hidden" }}
        >
          <h1 className="hero-header">About Ecoyaan</h1>
          <p
            className="hero-para"
            style={{ marginTop: "-16px", marginRight: "16px" }}
          >
            At Ecoyaan, we are more than just a platform. Our goal is to build a
            community of eco-conscious people who share a common vision and
            passion for a more sustainable world. We recognize that
            sustainability is a journey (as the Sanskrit word “yaan” suggests).
            To keep you motivated on this journey, we share:
            <ul>
              <li>
                Tips and tricks to adopt a more eco-friendly and low-waste
                lifestyle
              </li>
              <li>
                Videos, posts, and quizzes on climate change and sustainability
              </li>
              <li>
                Events and pledges that invite you to adopt a more sustainable
                lifestyle
              </li>
            </ul>
          </p>
        </div>
        <div className="hero-img">
          <img className="hero-img" src="./image/about.png" alt="hero" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

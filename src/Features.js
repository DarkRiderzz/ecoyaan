import features from "./data/feature.json";
function Features() {
  const feature = features.features;
  return (
    <div className="section-featured">
      {feature.map((el, i) => (
        <>
          <div className={`container ${i % 2 !== 0 ? "toggle" : ""}`}>
            <div className="feature-left">
              <p className="feature-heading">{el.heading}</p>
              {el.paragraph.map((el) => (
                <p className="feature-text">{el.para}</p>
              ))}
            </div>
            <div className="feature-img-cnt">
              <img className="feature-right" src={el.img} alt="feature-img" />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Features;

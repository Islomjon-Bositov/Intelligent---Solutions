import "./WhyUs.css";
import { whyUs } from "../../mock";

const WhyUs = () => {
  return (
    <div className="why_us">
      <section className="why_us_container">
        <h2 className="why_us_title">Why us?</h2>
        <div className="why_us_boxes">
          {whyUs.map((item) => {
            return (
              <div key={item.id} className="why_us_box">
                <img src={item.image} alt={item.image} />
                <div className='why_us_box_desc'>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default WhyUs;

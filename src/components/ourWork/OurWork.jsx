import "./OurWork.css";
import { examples } from "../../mock";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const OurWork = () => {
  return (
    <div className="our_work">
      <section className="our_work_container">
        <h2 className="our_work_title">The examples of our work</h2>
        <div className="our_work_boxes">
          {examples.map((item) => {
            return (
              <div key={item.id} className="our_work_box">
                <img src={item.image} alt={item.image} />
                <h3>{item.title}</h3>
                <Link to={`/`}> {item.desc} <FaArrowRightLong /></Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default OurWork;

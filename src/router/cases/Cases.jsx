import YourProject from "../../components/yourProject/YourProject";
import "./Cases.css";
import phones from "../../assets/Фото (3).png";
import { TiTick } from "react-icons/ti";
import specialRoom from "../../assets/Фото (4).png";
import astronaut from "../../assets/Фото (5).png";

const Cases = () => {
  return (
    <div>
      <div className="cases">
        <section className="cases_container">
          <div className="mobile_application">
            <h3>Mobile Application</h3>
            <div className="mobile_application_info">
              <img src={phones} alt={phones} />
              <div className="customer_requirements">
                <div className="customer_requirement">
                  <h5>Customer requirements</h5>
                  <div className="">
                    <p>
                      <span></span> Prompt access of managers to information
                      about production
                    </p>
                    <p>
                      <span></span> Application that motivates managers to work
                      in it
                    </p>
                    <p>
                      <span></span> Intuitive interface
                    </p>
                  </div>
                </div>

                <div className="our_solution">
                  <h5>Our solution</h5>
                  <p>
                    <span></span> Mobile app for production managers
                  </p>
                </div>

                <div className="the_result">
                  <h5>The result after implementation</h5>
                  <div className="">
                    <p>
                      <span>
                        <TiTick />
                      </span>{" "}
                      Access to production information from anywhere in the
                      factory
                    </p>
                    <p>
                      <span>
                        <TiTick />
                      </span>{" "}
                      Reducing the time spent on searching and analyzing
                      information{" "}
                    </p>
                    <p>
                      <span>
                        <TiTick />
                      </span>{" "}
                      Decision-making efficiency
                    </p>
                  </div>
                </div>
                <button>Project presentation</button>
              </div>
            </div>
          </div>
          <div className="digital_conveyor">
            <h3>Digital conveyor</h3>
            <div className="mobile_application_info">
              <img src={specialRoom} alt={specialRoom} />
              <div className="customer_requirements">
                <div className="customer_requirement">
                  <h5>Customer requirements</h5>
                  <div className="">
                    <p>
                      <span></span> To reduce the cost of conveyor repairment
                    </p>
                    <p>
                      <span></span> Determine the amount and moisture content of
                      ore
                    </p>
                    <p>
                      <span></span> Identify cuts on the conveyor belt in time
                    </p>
                  </div>
                </div>
                <div className="our_solution">
                  <h5>Our solution</h5>
                  <p>
                    <span></span> Mobile app for production managers
                  </p>
                </div>
                <div className="the_result">
                  <h5>The result after implementation</h5>
                  <div className="">
                    <p>
                      <span>
                        <TiTick />
                      </span>{" "}
                      Access to production information from anywhere in the
                      factory
                    </p>
                    <p>
                      <span>
                        <TiTick />
                      </span>{" "}
                      Reducing the time spent on searching and analyzing
                      information{" "}
                    </p>
                    <p>
                      <span>
                        <TiTick />
                      </span>{" "}
                      Decision-making efficiency
                    </p>
                  </div>
                </div>
                <button>Project presentation</button>
              </div>
            </div>
          </div>
          <div className="exoskeletons">
            <h3>Exoskeletons</h3>
            <div className="mobile_application_info">
              <img src={astronaut} alt={astronaut} />
              <div className="customer_requirements">
                <div className="customer_requirement">
                  <h5>Customer requirements</h5>
                  <div className="">
                    <p>
                      <span></span> Prompt access of managers to information
                      about production
                    </p>
                    <p>
                      <span></span> Application that motivates managers to work
                      in it
                    </p>
                    <p>
                      <span></span> Intuitive interface
                    </p>
                  </div>
                </div>

                <div className="our_solution">
                  <h5>Our solution</h5>
                  <p>
                    <span></span> Mobile app for production managers
                  </p>
                </div>

                <div className="the_result">
                  <h5>The result after implementation</h5>
                  <div className="">
                    <p>
                      <span>
                        <TiTick />
                      </span>{" "}
                      Access to production information from anywhere in the
                      factory
                    </p>
                    <p>
                      <span>
                        <TiTick />
                      </span>{" "}
                      Reducing the time spent on searching and analyzing
                      information{" "}
                    </p>
                    <p>
                      <span>
                        <TiTick />
                      </span>{" "}
                      Decision-making efficiency
                    </p>
                  </div>
                </div>
                <button>Project presentation</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <YourProject />
    </div>
  );
};

export default Cases;

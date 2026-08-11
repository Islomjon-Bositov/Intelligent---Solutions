import YourProject from "../../components/yourProject/YourProject";
import "./Services.css";
import personThatSee from "../../assets/Фото.png";
import fingersWithLaptop from "../../assets/Фото (1).png";
import woman from "../../assets/Фото (2).png"

const Services = () => {
  return (
    <div>
      <div className="services">
        <div className="services_container">
          <h2>Our team has competencies in various fields</h2>

          <div className="industry">
            <img src={personThatSee} alt={personThatSee} />
            <div className="industry_competence">
              <h3>Industry competence and expertise in business processes</h3>

              <div className="industry_competence_info">
                <label>
                  <input type="radio" checked/>
                  <span>Controlling</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Treasury </span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Document management</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Mining metallurgy</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Audit Management</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Accounting and tax accounting</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Retail and e-commerce</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Oil production and refining</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Procurement and inventory management</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Sales and customer relations</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Repair and production management</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Risk management and control procedures</span>
                </label>
              </div>
            </div>
          </div>

          <div className="expertise">
            <div className="expertise_in_IT">
              <h3>Expertise in IT technologies</h3>

              <div className="expertise_in_IT_info">
                <label>
                  <input type="radio" checked/>
                  <span>VR / AR</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Chat bots </span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Machine vision</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Autonomous drones</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Digital doubles</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Mobile solutions</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>RPA Software Robots</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Dashboards and reporting systems</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Exoskeletons and industrial robots</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>
                    Systems for predictive repair and optimization of equipment
                    operation modes
                  </span>
                </label>
              </div>
            </div>
            <img src={fingersWithLaptop} alt={fingersWithLaptop} />
          </div>

          <div className="management">
            <img src={woman} alt={woman} />
            <div className="management_competence">
              <h3>Industry competence and expertise in business processes</h3>

              <div className="management_competence_info">
                <label>
                  <input type="radio" checked/>
                  <span>Controlling</span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Treasury </span>
                </label>
                <label>
                  <input type="radio" checked/>
                  <span>Document management</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <YourProject />
    </div>
  );
};

export default Services;

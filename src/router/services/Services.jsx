import YourProject from "../../components/yourProject/YourProject";
import "./Services.css";
import personThatSee from "../../assets/Фото.png";
import fingersWithLaptop from "../../assets/Фото (1).png";
import woman from "../../assets/Фото (2).png";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="services">
        <div className="services_container">
          <h2>{t("services.title")}</h2>

          <div className="industry">
            <img src={personThatSee} alt={personThatSee} />
            <div className="industry_competence">
              <h3>{t("services.industry.title")}</h3>

              <div className="industry_competence_info">
                <label>
                  <input type="radio" checked />
                  <span>{t("services.industry.controlling")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.industry.treasury")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.industry.document")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.industry.mining")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.industry.audit")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.industry.accounting")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.industry.retail")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.industry.oil")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.industry.procurement")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.industry.sales")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.industry.repair")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.industry.risk")}</span>
                </label>
              </div>
            </div>
          </div>

          <div className="expertise">
            <div className="expertise_in_IT">
              <h3>{t("services.expertise.title")}</h3>

              <div className="expertise_in_IT_info">
                <label>
                  <input type="radio" checked />
                  <span>{t("services.expertise.vr")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.expertise.chat")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.expertise.machine")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.expertise.autonomous")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.expertise.digital")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.expertise.mobile")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.expertise.pra")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.expertise.dashboards")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.expertise.exoskeletons")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.expertise.systems")}</span>
                </label>
              </div>
            </div>
            <img src={fingersWithLaptop} alt={fingersWithLaptop} />
          </div>

          <div className="management">
            <img src={woman} alt={woman} />
            <div className="management_competence">
              <h3>{t("services.management.title")}</h3>

              <div className="management_competence_info">
                <label>
                  <input type="radio" checked />
                  <span>{t("services.management.it")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.management.digital")}</span>
                </label>
                <label>
                  <input type="radio" checked />
                  <span>{t("services.management.launch")}</span>
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

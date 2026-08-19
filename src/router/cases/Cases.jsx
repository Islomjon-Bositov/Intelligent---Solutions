import YourProject from "../../components/yourProject/YourProject";
import "./Cases.css";
import phones from "../../assets/Фото (3).png";
import { TiTick } from "react-icons/ti";
import specialRoom from "../../assets/Фото (4).png";
import astronaut from "../../assets/Фото (5).png";
import { useTranslation } from "react-i18next";

const Cases = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="cases">
        <section className="cases_container">
          <div className="mobile_application">
            <h3>{t("application.title")}</h3>
            <div className="mobile_application_info">
              <img src={phones} alt={phones} />
              <div className="customer_requirements">
                <div className="customer_requirement">
                  <h5>{t("application.topTitle")}</h5>
                  <div className="requirement_desc">
                    <p>
                      <span></span>
                      {t("application.prompt")}
                    </p>
                    <p>
                      <span></span>
                      {t("application.application")}
                    </p>
                    <p>
                      <span></span>
                      {t("application.intuitive")}
                    </p>
                  </div>
                </div>

                <div className="our_solution">
                  <h5>{t("application.midTitle")}</h5>
                  <p>
                    <span></span>
                    {t("application.mobileApp")}
                  </p>
                </div>

                <div className="the_result">
                  <h5>{t("application.downTitle")}</h5>
                  <div>
                    <p>
                      <span>
                        <TiTick />
                      </span>
                      {t("application.access")}
                    </p>
                    <p>
                      <span>
                        <TiTick />
                      </span>
                      {t("application.reducing")}
                    </p>
                    <p>
                      <span>
                        <TiTick />
                      </span>
                      {t("application.decision")}
                    </p>
                  </div>
                </div>
                <button>{t("application.btn")}</button>
              </div>
            </div>
          </div>

          <div className="digital_conveyor">
            <h3>{t("digital.title")}</h3>
            <div className="mobile_application_info">
              <img src={specialRoom} alt={specialRoom} />
              <div className="customer_requirements">
                <div className="customer_requirement">
                  <h5>{t("digital.topTitle")}</h5>
                  <div className="">
                    <p>
                      <span></span>
                      {t("digital.prompt")}
                    </p>
                    <p>
                      <span></span>
                      {t("digital.application")}
                    </p>
                    <p>
                      <span></span>
                      {t("digital.intuitive")}
                    </p>
                  </div>
                </div>
                <div className="our_solution">
                  <h5>{t("digital.midTitle")}</h5>
                  <p>
                    <span></span> {t("digital.mobileApp")}
                  </p>
                </div>
                <div className="the_result">
                  <h5>{t("digital.downTitle")}</h5>
                  <div className="">
                    <p>
                      <span>
                        <TiTick />
                      </span>
                      {t("digital.access")}
                    </p>
                    <p>
                      <span>
                        <TiTick />
                      </span>
                      {t("digital.reducing")}
                    </p>
                    <p>
                      <span>
                        <TiTick />
                      </span>
                      {t("digital.decision")}
                    </p>
                  </div>
                </div>
                <button>{t("digital.btn")}</button>
              </div>
            </div>
          </div>
          <div className="exoskeletons">
            <h3>{t("exoskeletons.title")}</h3>
            <div className="mobile_application_info">
              <img src={astronaut} alt={astronaut} />
              <div className="customer_requirements">
                <div className="customer_requirement">
                  <h5>{t("exoskeletons.topTitle")}</h5>
                  <div className="">
                    <p>
                      <span></span>
                      {t("exoskeletons.prompt")}
                    </p>
                    <p>
                      <span></span>
                      {t("exoskeletons.application")}
                    </p>
                    <p>
                      <span></span>
                      {t("exoskeletons.intuitive")}
                    </p>
                  </div>
                </div>

                <div className="our_solution">
                  <h5>{t("exoskeletons.midTitle")}</h5>
                  <p>
                    <span></span>
                    {t("exoskeletons.mobileApp")}
                  </p>
                </div>

                <div className="the_result">
                  <h5>{t("exoskeletons.downTitle")}</h5>
                  <div className="">
                    <p>
                      <span>
                        <TiTick />
                      </span>
                      {t("exoskeletons.access")}
                    </p>
                    <p>
                      <span>
                        <TiTick />
                      </span>
                      {t("exoskeletons.reducing")}
                    </p>
                    <p>
                      <span>
                        <TiTick />
                      </span>
                      {t("exoskeletons.decision")}
                    </p>
                  </div>
                </div>
                <button>{t("exoskeletons.btn")}</button>
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

import "./OurWork.css";
import { examples } from "../../mock";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OurWork = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="our_work">
      <section className="our_work_container">
        <h2 className="our_work_title">{t('ourWork.title')}</h2>
        <div className="our_work_boxes">
          {examples.map((item) => {
            return (
              <div key={item.id} className="our_work_box">
                <img src={item.image} alt={item.image} />
                <h3>{t('ourWork.mobile.title')}</h3>
                <Link to={`cases`}>
                  {" "}
                  {t('ourWork.mobile.link')} <FaArrowRightLong />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default OurWork;

import "./WhyUs.css";
import { whyUs } from "../../mock";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="why_us">
      <section className="why_us_container">
        <h2 className="why_us_title">{t('whyUs.title')}</h2>
        <div className="why_us_boxes">
          {whyUs.map((item) => {
            return (
              <div key={item.id} className="why_us_box">
                <img src={item.image} alt={item.image} />
                <div className="why_us_box_desc">
                  <h3>{t('whyUs.flexible.title')}</h3>
                  <p>{t('whyUs.flexible.desc')}</p>
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

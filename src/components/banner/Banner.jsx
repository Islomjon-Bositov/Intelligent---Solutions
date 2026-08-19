import "./Banner.css";
import bannerImg from "../../assets/Group 1147.png";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState(false);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="banner">
      <section className="banner_container">
        <div className="trust_us">
          <p className="sub_title">{t('banner.topTitle')}</p>
          <h2 className="banner_title">
            {t('banner.title')}
          </h2>
          <p className="banner_desc">
            {t('banner.downTitle')}
          </p>
          <button onClick={() => setModal(true)}>{t('banner.bannerBtn')}</button>
        </div>
        <img src={bannerImg} alt={bannerImg} />
        {modal && (
          <div className="modal">
            <div className="modal_wrapper">
              <div className="modal_head">
                <h2>{t('banner.modal.title')}</h2>
                <button onClick={() => setModal(false)}>
                  <GrFormClose />
                </button>
              </div>
              <div className="modal_body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia suscipit reprehenderit quibusdam dolores pariatur
                explicabo quo eligendi vero quis provident!
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Banner;

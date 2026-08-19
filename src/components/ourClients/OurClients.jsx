import "./OurClients.css";

import nornikel from "../../assets/Логотип Норникель.png";
import evraz from "../../assets/Логотип Евраз.png";
import miba from "../../assets/Логотип Miba.png";
import bp from "../../assets/Логотип bp.png";
import rosvoda from "../../assets/Логотип росвода.png";
import lightning from "../../assets/Логтип electroneek.png";

import { useTranslation } from 'react-i18next';

const OurClients = () => {
  const {t, i18n} = useTranslation()
  return (
    <div className="our_clients">
      <section className="our_clients_container">
        <h2>{t('outClient')}</h2>

        <div className="clients_imgs">
          <img src={nornikel} alt={nornikel} />
          <img src={evraz} alt={evraz} />
          <img src={miba} alt={miba} />
          <img src={bp} alt={bp} />
          <img src={rosvoda} alt={rosvoda} />
          <img className='lightning' src={lightning} alt={lightning} />
        </div>
      </section>
    </div>
  );
};

export default OurClients;

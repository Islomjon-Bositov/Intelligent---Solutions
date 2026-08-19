import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="footer">
      <p>{t('footer.title')}</p>
    </footer>
  );
};

export default Footer;

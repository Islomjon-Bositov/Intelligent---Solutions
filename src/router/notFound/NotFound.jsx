import "./NotFound.css";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="not_found_page">
      <h2>{t('notFound.title')}</h2>
      <p>{t('notFound.desc')}</p>
    </div>
  );
};

export default NotFound;

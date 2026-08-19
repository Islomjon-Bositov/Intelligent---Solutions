import "./YourProject.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const YourProject = () => {
  const { t, i18n } = useTranslation();
  const user = useSelector((item) => item.user.value);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      number,
      email,
    };

    dispatch(addUser(user));
  };

  return (
    <div className="your_project">
      <section className="your_project_container">
        <h2>{t("yourProject.title")}</h2>
        <p className="your_project_desc">{t("yourProject.desc")}</p>

        <div className="form_box">
          <div className="form_box_results">
            {user.map((item) => {
              return (
                <div>
                  <p>
                    {t("yourProject.form.name")} {item.name}
                  </p>
                  <p>
                    {t("yourProject.form.phone")} {item.number}
                  </p>
                  <p>
                    {t("yourProject.form.email")} {item.email}
                  </p>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="form_box_request">
            <label>
              {t("yourProject.formIn.name")}
              <input
                onChange={(n) => setName(n.target.value)}
                type="text"
                placeholder="Enter your name"
                required
              />
            </label>
            <label>
              {t("yourProject.formIn.phone")}
              <input
                onChange={(n) => setNumber(n.target.value)}
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </label>
            <label>
              {t("yourProject.formIn.email")}
              <input
                onChange={(n) => setEmail(n.target.value)}
                type="email"
                placeholder="Enter your e-mail"
                required
              />
            </label>
            <button>{t("yourProject.formIn.btn")}</button>
            <p className="form_box_request_desc">
              {t('yourProject.formIn.desc')}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default YourProject;

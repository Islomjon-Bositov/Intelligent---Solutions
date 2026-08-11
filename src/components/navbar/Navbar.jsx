import "./Navbar.css";
import logo from "../../assets/Group 1144.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <header className="header_container">
        <a
          href={`https://www.figma.com/design/4XDKQIlDgQFAYMx3gaoHRL/%D0%B2%D0%BD%D0%B5%D0%B4%D1%80%D0%B5%D0%BD%D0%B8%D0%B5-IT-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC?node-id=557-3273&p=f&t=EU3qwOme1E5iGdFp-0`}
        >
          <img src={logo} alt={logo} />
        </a>
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <Link to={"/"}>About Us</Link>
              </li>
              <li>
                <Link to={"services"}>Services</Link>
              </li>
              <li>
                <Link to={"cases"}>Cases</Link>
              </li>
            </ul>
          </nav>
          <select name="">
            <option value="eng">Eng</option>
            <option value="ru">Ru</option>
          </select>
          <Link className="contact_us_link" to={`contact-us`}>
            Contact Us
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

import "./YourProject.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";

const YourProject = () => {
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
        <h2>We're ready to discuss your project</h2>
        <p className="your_project_desc">
          Leave your request for a consultation and get an answer soon{" "}
        </p>

        <div className="form_box">
          <div className="form_box_results">
            {user.map((item) => {
              return (
                <div>
                  <p>Name: {item.name}</p>
                  <p>Phone: {item.number}</p>
                  <p>E-mail: {item.email}</p>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="form_box_request">
            <label>
              Name *
              <input
                onChange={(n) => setName(n.target.value)}
                type="text"
                placeholder="Enter your name"
              />
            </label>
            <label>
              Phone number *
              <input
                onChange={(n) => setNumber(n.target.value)}
                type="tel"
                placeholder="Enter your phone number"
              />
            </label>
            <label>
              E-mail *
              <input
                onChange={(n) => setEmail(n.target.value)}
                type="email"
                placeholder="Enter your e-mail"
              />
            </label>
            <button>Send</button>
            <p className="form_box_request_desc">
              By clicking the button, you automatically agree to{" "}
              <Link to={`/`}>Privacy Policy</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default YourProject;

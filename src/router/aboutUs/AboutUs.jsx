import Banner from "../../components/banner/Banner";
import OurClients from "../../components/ourClients/OurClients";
import OurWork from "../../components/ourWork/OurWork";
import WhyUs from "../../components/whyUs/WhyUs";
import YourProject from "../../components/yourProject/YourProject";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Banner />
      <WhyUs />
      <OurWork />
      <OurClients />
      <YourProject />
    </div>
  );
};

export default AboutUs;

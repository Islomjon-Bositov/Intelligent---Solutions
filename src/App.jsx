import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./router/aboutUs/AboutUs";
import Services from "./router/services/Services";
import Cases from "./router/cases/Cases";
import ContactUs from "./router/contactUs/ContactUs";
import Footer from "./components/footer/Footer";
import NotFound from "./router/notFound/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="cases" element={<Cases />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

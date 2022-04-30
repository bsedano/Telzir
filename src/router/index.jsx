import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import AboutUs from "../pages/aboutUs";
import Services from "../pages/services";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Router;

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages_components/Home";
import Service from "../pages_components/Service";
import Destination from "../pages_components/Destination";
import About from "../pages_components/about_section/about_page/About";
// import bgimg from "../../assets/images/homebg.png"
import Footer from "./Footer";
import Trust from "../pages_components/Trust";
import Testimonial from "../pages_components/Testimonial";
// import Check from "../pages_components/Check";
import "../../style/layout.css";
export default function Layout() {
  return (
    <>
      {/* <Check /> */}
      <NavBar />

      <Outlet />
      <About />
      <Service />
      <Trust />
      <Destination />
      <Testimonial />
      <Footer />
    </>
  );
}

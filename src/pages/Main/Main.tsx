import * as sc from "./styles";
import Header from "../../components/Header/Header";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import PortFolio from "../PortFolio/PortFolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <>
      <sc.Content>
        <Header />
      </sc.Content>
      <Hero />
      <About />
      <Services/>
      <PortFolio/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Main;

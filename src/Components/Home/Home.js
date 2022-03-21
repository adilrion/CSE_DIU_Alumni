import React from "react";
import Banner from "../Pages/Banner/Banner";
import Committee from "../Pages/Committee/Committee";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ProgramEvents from "../Pages/ProgramEvents/ProgramEvents";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Home = () => {
  return (
    <section id="home">
      <Banner></Banner>

      <Committee></Committee>
      <ProgramEvents />
      <ContactUs />

      <Footer></Footer>
    </section>
  );
};

export default Home;

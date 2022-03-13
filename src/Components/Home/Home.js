import React from "react";
import Banner from "../Pages/Banner/Banner";
import Committee from "../Pages/Committee/Committee";
import Error from "../Shared/Error/Error";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Home = () => {
  return (
    <section id="home">
      <Banner></Banner>
      <Committee></Committee>
      <Footer></Footer>
    </section>
  );
};

export default Home;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Committees from "./Components/Pages/Committee/Committees";
import ContactPage from "./Components/Pages/ContactUs/ContactPage";
import Gallery from "./Components/Pages/Gallery/GalleryH";
import ProgramEventPage from "./Components/Pages/ProgramEvents/ProgramEventPage";
import Error from "./Components/Shared/Error/Error";
import Navigation from "./Components/Shared/Navigation/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="committee" element={<Committees />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="program-events" element={<ProgramEventPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

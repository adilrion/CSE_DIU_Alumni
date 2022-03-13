import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Committee from "./Components/Pages/Committee/Committee";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Gallery from "./Components/Pages/Gallery/Gallery";
import NoticeBoard from "./Components/Pages/NoticeBoard/NoticeBoard";
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
          <Route path="committee" element={<Committee />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="notice-board" element={<NoticeBoard />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

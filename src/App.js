import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./components/Nav/Navbar";

import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery/Gallery";
import GalleryPage1 from "./Pages/Gallery/GalleryPage1";
import GalleryPage2 from "./Pages/Gallery/GalleryPage2";
import Price from "./Pages/Price";
import Viernes from "./Pages/Schedule/Friday";
import Lunes from "./Pages/Schedule/Monday";
import Sabado from "./Pages/Schedule/Saturday";
import Schedule from "./Pages/Schedule/Schedule";
import Domingo from "./Pages/Schedule/Sunday";
import Jueves from "./Pages/Schedule/Thursday";
import Martes from "./Pages/Schedule/Tuesday";
import Miercoles from "./Pages/Schedule/Wednesday";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="pricing" element={<Price />} />
          <Route path="about" element={<About />} />

          <Route path="schedule" element={<Schedule />}>
            <Route path="monday" element={<Lunes />} />
            <Route path="tuesday" element={<Martes />} />
            <Route path="wednesday" element={<Miercoles />} />
            <Route path="thursday" element={<Jueves />} />
            <Route path="friday" element={<Viernes />} />
            <Route path="saturday" element={<Sabado />} />
            <Route path="sunday" element={<Domingo />} />
          </Route>

          <Route path="gallery" element={<Gallery />}>
            <Route path="page-1" element={<GalleryPage1 />} />
            <Route path="page-2" element={<GalleryPage2 />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

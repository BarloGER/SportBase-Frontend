import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Events from "./components/Events";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/events" element={<Events />} />
      </Routes>

      <Footer />
    </>
  );
}

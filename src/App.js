import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/reset.css";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Footer />
    </>
  );
}

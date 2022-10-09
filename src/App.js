import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
//import "./styles/reset.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./styles/global.css";

export default function App() {
  return (
    <>
{/* <FontAwesomeIcon className="fontawesomeicon" icon={['fa', 'home']} />
<FontAwesomeIcon className="fontawesomeicon" icon={['fa', 'chevronright']} />
<FontAwesomeIcon className="" icon={['fab', 'google']} /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

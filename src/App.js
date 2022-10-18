import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import Events from "./components/Events";
import EventForm from "./components/EventForm";
import Dashboard from "./components/Dashboard";
import GlobalLayout from "./components/GlobalLayout";
import ProtectedLayout from "./components/Protectedlayout";
import { getUser } from "./utils/getUser";
import "./styles/global.css";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const { data, error } = await getUser(token);
        if (error) {
          throw new Error(error.response?.data.error || error.message);
        }
        // setUser(data);
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem("token");
        setToken(null);
      }
    };

    token && validateToken();
  }, [token]);

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} logOut={logOut} user={user} />

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/signin"
          element={
            <SignIn
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              setToken={setToken}
            />
          }
        />
        {/* WEGEN ROUTER IM SIGNUP GUCKEN. WIE ERREICHT MAN DIE VON HIER =? */}

        <Route
          path="secret"
          element={<ProtectedLayout isAuthenticated={isAuthenticated} />}
        >
          {/* <Route element={<Dashboard />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="events" element={<Events />} />
          <Route path="eventform" element={<EventForm />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

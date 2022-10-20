import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import Events from "./components/Events";
import EventMultiForm from "./components/EventMultiForm";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";

import GlobalLayout from "./components/GlobalLayout";
import ProtectedLayout from "./components/Protectedlayout";
import { getUser } from "./utils/getUser";

import Search from "./components/Search";
import Account from "./components/Account";
import PublicCalendar from "./components/PublicCalendar";
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
        setUser(data);
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
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="calendar" element={<PublicCalendar />} />
          <Route path="account/:id" element={<Account />} />
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

          <Route
            path="secret"
            element={<ProtectedLayout isAuthenticated={isAuthenticated} />}
          >
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="events" element={<Events />} />
              <Route path="eventMultiForm" element={<EventMultiForm />} />
              <Route path="search" element={<Search />} />
            </Route>
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

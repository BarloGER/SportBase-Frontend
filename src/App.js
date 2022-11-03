import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import EventMultiForm from "./components/event/EventMultiForm";
import EventDetail from "./components/event/EventDetail";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import TeamCreateForm from "./components/TeamCreateForm";
import GlobalLayout from "./components/GlobalLayout";
import ProtectedLayout from "./components/Protectedlayout";
import { getUser } from "./utils/getUser";
import Search from "./components/Search";
import Account from "./components/Account";
import TeamProfile from "./components/TeamProfile";
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
          <Route path="account/:id" element={<Account user={user} />} />
          <Route path="teamprofile/:id" element={<TeamProfile user={user} />} />
          <Route path="event/:id" element={<EventDetail />} />

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
            <Route path="dashboard" element={<Dashboard user={user} />}>
              <Route path="eventMultiForm" element={<EventMultiForm />} />
              <Route path="search" element={<Search />} />
              <Route path="teamCreateForm" element={<TeamCreateForm user={user} />} />
              <Route path="calendar" element={<PublicCalendar />} />
              <Route path="account/:id" element={<Account user={user} />} />
              <Route
                path="teamprofile/:id"
                element={<TeamProfile user={user} />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

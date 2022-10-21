import { Helmet } from "react-helmet";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function SignIn({
  isAuthenticated,
  setIsAuthenticated,
  setToken,
}) {
  const [active, setActive] = useState(true);
  const handleClick = (state, e) => {
    e.preventDefault();
    setActive(state);
  };

  return (
    <main className="signIn">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="SignIn Seite mit 2 Komponenten." />
      </Helmet>
      {active && (
        <Login
          handleClick={handleClick}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
      {!active && (
        <SignUp
          handleClick={handleClick}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
    </main>
  );
}

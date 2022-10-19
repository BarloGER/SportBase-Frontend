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

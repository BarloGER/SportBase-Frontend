import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function SignIn() {
  const [active, setActive] = useState(true);
  const handleClick = (state) => {
    setActive(state);
  };

  return (
    <main className="signIn">
      {active && <Login handleClick={handleClick} />}
      {!active && <SignUp handleClick={handleClick} />}
    </main>
  );
}

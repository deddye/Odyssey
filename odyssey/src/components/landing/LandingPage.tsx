import { useState } from "react";
import Create from "./Create";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

export default function SignOn() {
  const [shouldLogIn, SetShouldLogIn] = useState<boolean>(false);

  function logInClicked() {
    SetShouldLogIn(true);
  }

  return (
    <>
      <h1
        className="mb-4 text-4xl font-extrabold leading-none tracking-tight  text-white md:text-5xl lg:text-6xl"
        style={{ textAlign: "center", paddingTop: 10 }}
      >
        Welcome to Odyssey
      </h1>

      <div style={{ textAlign: "center" }}>
        {!shouldLogIn ? (
          <div>
            <CreateAccount />
            <p>If you have an account, Click here to</p>
            <a
              className="cursor-pointer text-slate-100 hover:text-slate-500"
              onClick={logInClicked}
            >
              Log in
            </a>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

import { useState } from "react";

export default function SignOn() {
  const [shouldLogIn, SetShouldLogIn] = useState<boolean>(false);

  function logInClicked() {
    console.log("we clicked baby");
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
        <p className="mb-6 text-lg font-normal sm:px-16 lg:text-xl xl:px-48 dark:text-gray-200">
          Create Account
        </p>
        <form>
          <label htmlFor="fname">First name</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <br />
          <label htmlFor="lname">Last Name</label>
          <br />
          <input type="text" id="lname" name="lname" />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" name="email" />
        </form>
        <br />
        <button className="rounded border border-blue-700 bg-blue-500 px-2 py-1.5 font-bold text-white hover:bg-blue-700">
          Create Account!
        </button>
        <p>If you have an account, Click here to</p>
        <a
          className="cursor-pointer text-slate-100 hover:text-slate-500"
          onClick={logInClicked}
        >
          Log in
        </a>
      </div>
    </>
  );
}

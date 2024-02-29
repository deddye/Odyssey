import { type SetStateAction, useState } from "react";
import axios from "axios";

const emailRegex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
export default function Create() {
  const [emailRegexBool, setEmailRegexBool] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const changeFirstName = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e: { target: { value: SetStateAction<string> } }) => {
    setLastName(e.target.value);
  };

  const changeEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmailRegexBool(emailRegex.test(e.target.value.toString()));
    setEmail(e.target.value);
    console.log(email);
  };

  const createClicked = () => {
    if (emailRegexBool) {
      axios
        .post("/createAccount", {
          firstName: firstName,
          lastName: lastName,
          email: email,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <p className="mb-6 text-lg font-normal sm:px-16 lg:text-xl xl:px-48 dark:text-gray-200">
        Create Account
      </p>
      <form>
        <label htmlFor="fname">First name</label>
        <br />
        <input
          placeholder="First Name"
          type="text"
          name="fname"
          onChange={changeFirstName}
        />
        <br />
        <br />
        <label htmlFor="lname">Last Name</label>
        <br />
        <input
          placeholder="Last Name"
          type="text"
          name="lname"
          onChange={changeLastName}
        />
        <br />
        <br />
        {emailRegexBool ? (
          <label htmlFor="email">Email</label>
        ) : (
          <>
            <span>
              <label htmlFor="email">Email </label>
            </span>
            <span style={{ color: "#ff0000" }}>*Input Valid Emai</span>
          </>
        )}

        <br />
        <input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          onChange={changeEmail}
        />
      </form>
      <br />
      <button
        className="rounded border bg-indigo-600  px-2 py-1.5 font-bold text-white hover:bg-indigo-500"
        onClick={createClicked}
      >
        Create Account!
      </button>
    </div>
  );
}

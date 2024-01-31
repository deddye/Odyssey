import { type SetStateAction, useState } from "react";
import axios from "axios";
import { env } from "~/env.mjs";

export default function Create() {
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
    setEmail(e.target.value);
  };

  async function createClicked() {
    await axios.post(`${env.NEXT_PUBLIC_WEBSERVER_IP}/createAccount`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    console.log(env.NEXT_PUBLIC_WEBSERVER_IP);
  }
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
        <label htmlFor="email">Email</label>
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

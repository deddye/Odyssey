import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { type SetStateAction, useState } from "react";
import axios from "axios";

const emailRegex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
export default function Component() {
  const [emailRegexBool, setEmailRegexBool] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const changeName = (e: { target: { value: SetStateAction<string> } }) => {
    setName(e.target.value);
  };

  const changePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value);
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
          name: name,
          password: password,
          email: email,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your information to get started
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Full Name"
            required
            onChange={changeName}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="email@example.com"
            required
            onChange={changeEmail}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Password"
            id="password"
            required
            type="password"
            onChange={changePassword}
          />
        </div>
        <Button className="w-full" type="submit" onClick={createClicked}>
          Create an account
        </Button>
      </div>
    </div>
  );
}

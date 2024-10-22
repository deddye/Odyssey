import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#223749] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white"
      onClick={() => loginWithRedirect()}
    >
      <span className="truncate">Log in</span>
    </button>
  );
};

export default LoginButton;

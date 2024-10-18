import Image from "next/image";
import LoginButton from "~/components/auth/login";
import { env } from "~/env.mjs";

export default function Home() {
  console.log(`${env.NEXT_PUBLIC_SERVER}`);

  return (
    <>
      <div className="mainPage">
        <Image
          className="mainPageBackground"
          src="/mainpagebackground.jpeg"
          alt="background Image"
          fill={true}
        />
        <div className="mainPageSignOn">
          <LoginButton />
        </div>
      </div>
    </>
  );
}

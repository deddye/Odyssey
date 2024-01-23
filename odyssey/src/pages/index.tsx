import Image from "next/image";
import SignOn from "~/components/SignOn";

export default function Home() {
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
          <SignOn />
        </div>
      </div>
    </>
  );
}

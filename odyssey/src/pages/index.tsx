import Image from "next/image";
import LandingPage from "~/components/landing/LandingPage";

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
          <LandingPage />
        </div>
      </div>
    </>
  );
}

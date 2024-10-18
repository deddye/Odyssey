import LogoutButton from "~/components/auth/logout";
import Profile from "~/components/auth/profile";

export default function Dashboard() {
  return (
    <>
      <div>Welcome to your dashboard</div>
      <Profile></Profile>
      <LogoutButton></LogoutButton>
    </>
  );
}

export default function Login() {
  return (
    <div>
      <p className="mb-6 text-lg font-normal sm:px-16 lg:text-xl xl:px-48 dark:text-gray-200">
        Login
      </p>
      <form>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="password" />
      </form>
      <br />
      <button className="rounded border bg-indigo-600  px-2 py-1.5 font-bold text-white hover:bg-indigo-500">
        Login!
      </button>
    </div>
  );
}

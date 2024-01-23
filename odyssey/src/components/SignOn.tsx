export default function SignOn() {
  return (
    <>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight  text-white md:text-5xl lg:text-6xl"
        style={{ textAlign: "center", paddingTop: 10 }}
      >
        Welcome to Odyssey
      </h1>

      <div style={{ textAlign: "center" }}>
        <p class="mb-6 text-lg font-normal sm:px-16 lg:text-xl xl:px-48 dark:text-gray-200">
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
        <button class="rounded border border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Button
        </button>
      </div>
    </>
  );
}

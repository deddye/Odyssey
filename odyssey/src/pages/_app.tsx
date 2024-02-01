import axios from "axios";
import { type AppType } from "next/dist/shared/lib/utils";
import { env } from "~/env.mjs";

import "~/styles/globals.css";

axios.defaults.baseURL = env.NEXT_PUBLIC_SERVER;
const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;

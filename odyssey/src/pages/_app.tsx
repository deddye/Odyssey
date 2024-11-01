import { Auth0Provider } from "@auth0/auth0-react";
import { type AppType } from "next/dist/shared/lib/utils";
import { env } from "~/env.mjs";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const domain = `${env.NEXT_PUBLIC_OAUTH_DOMAIN}`;
  const auth_id = `${env.NEXT_PUBLIC_OAUTH_CLIENT_ID}`;
  console.log(`${env.NEXT_PUBLIC_SERVER}`);
  return (
    <Auth0Provider
      domain={domain} // TODO: add these to env variables for development
      clientId={auth_id}
      authorizationParams={{
        redirect_uri: "http://localhost:3000/dashboard",
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
};

export default MyApp;

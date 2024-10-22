import { Auth0Provider } from "@auth0/auth0-react";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain="dev-rg5ee6jpux7o4xqb.us.auth0.com" // TODO: add these to env variables for development
      clientId="zn5t5qNK8rkV8kivuOS0OeeDKkGompVJ"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/dashboard",
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
};

export default MyApp;

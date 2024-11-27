import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/components/layout";
import { supabase } from "~/lib/utils/supabase/supabaseClient";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionContextProvider>
  );
};

export default MyApp;

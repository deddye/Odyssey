import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Odyssey</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#111518" />
      </Head>
      <div
        className="group/design-root dark relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[#111518]"
        style={{ fontFamily: "Be Vietnam Pro, Noto Sans, sans-serif" }}
      >
        <main>{children}</main>
      </div>
    </>
  );
}

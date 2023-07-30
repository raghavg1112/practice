import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { useSSR } from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const { isBrowser } = useSSR();

  return (
    <>
      {isBrowser && (
        <NextUIProvider>
          <SessionProvider session={session}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </SessionProvider>
        </NextUIProvider>
      )}
    </>
  );
}

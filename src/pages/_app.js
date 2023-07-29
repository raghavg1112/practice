import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { useSSR } from "@nextui-org/react";

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
            <Component {...pageProps} />
          </SessionProvider>
        </NextUIProvider>
      )}
    </>
  );
}

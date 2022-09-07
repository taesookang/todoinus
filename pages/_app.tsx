import "../styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;

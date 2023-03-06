import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react';
import client from '../lib/apolloclient';
import { ApolloProvider } from '@apollo/client';
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session; }>){
  return (
    <SessionProvider session={pageProps.session}>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    </SessionProvider>
  );
}

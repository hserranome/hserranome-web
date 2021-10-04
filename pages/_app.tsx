import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <Head>
                        {process.env.NODE_ENV == "production" ? (
                            <script
                                async
                                defer
                                data-website-id="168b16e3-449f-437a-abc8-d9eceff85565"
                                src="https://analytics.mango.moe/umami.js"
                            ></script>
                        ) : null}
                    </Head>
                </Head>
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;

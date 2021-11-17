import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "@styles/global.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
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
                {process.env.NODE_ENV == "production" ? (
                    <script
                        async
                        defer
                        data-website-id="168b16e3-449f-437a-abc8-d9eceff85565"
                        src="https://analytics.mango.moe/umami.js"
                    ></script>
                ) : null}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

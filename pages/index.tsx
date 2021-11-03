import React from "react";
import Head from "next/head";

import { Container } from "@components";

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Hendy Serrano - Digital creator</title>
                <meta
                    name="description"
                    content="🚀  Creating digital products from scratch. 📣  I write about the entire creation process. 🧠  Sharing resources, tools, and thoughts."
                />
                <meta
                    name="keywords"
                    content="digital, product management, entrepeneurship, programming, marketing, startup, apps, development"
                />
                <meta name="author" content="Hendy Serrano" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    charSet="UTF-8"
                />
            </Head>
            <Hero />
        </Container>
    );
};

export default Home;

const Hero: React.FC = () => {
    return (
        <div className="mx-auto max-w-screen-sm w-full px-4 pt-24 lg:pt-24 pb-14 font-sans ">
            <div className="mb-6">
                <h1 className="mb-6 text-3xl tracking-tight text-gray-800 sm:text-4xl sm:leading-none">
                    <span>¡Hello! I'm </span>
                    <br className="sm:hidden" />
                    <span className="font-bold">Hendy Serrano 👋</span>
                    <br />
                </h1>
                <p className="text-base text-gray-700 md:text-lg">
                    <span>🚀 </span>
                    <span className="ml-1 font-bold">
                        Creating digital products from scratch.
                    </span>
                    <br />
                    <span>📣 </span>
                    <span className="ml-1">
                        I write about the entire creation process.
                    </span>
                    <br />
                    <span>🧠 </span>
                    <span className="ml-1">
                        Sharing resources, tools, and thoughts.
                    </span>
                </p>
            </div>
            <hr className="mb-6 border-gray-300" />
            <div className="flex flex-col text-indigo-500 font-medium">
                <a
                    className="mr-8 flex items-center mt-2 sm:mt-0"
                    href="mailto:hendy@hserrano.me"
                >
                    <span>📬</span>
                    <p className="ml-3 underline">hendy@hserrano.me</p>
                </a>
                <a
                    className="mr-8 flex items-center"
                    href="https://twitter.com/hserranome"
                >
                    <span>🐤</span>
                    <p className="ml-3 underline">Twitter</p>
                </a>
            </div>
        </div>
    );
};

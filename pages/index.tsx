import React from "react";
import Head from "next/head";

import { Container } from "@components";

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Hendy Serrano 🚀 </title>
                <meta name="description" content="🚀 " />
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
                    <span>Hello! I'm </span>
                    <br className="sm:hidden" />
                    <span className="font-bold">Hendy Serrano 👋</span>
                    <br />
                </h1>
            </div>
            <hr className="mb-6 border-gray-300" />
            <div className="flex flex-col text-indigo-500 font-medium">
                <a
                    className="mr-8 flex items-center mt-2 sm:mt-0 mb-1"
                    href="mailto:hendy@hserrano.me"
                >
                    <span>📬</span>
                    <p className="ml-3 underline">Email</p>
                </a>
                <a
                    className="mr-8 mb-1 flex items-center"
                    href="https://twitter.com/hserranome"
                >
                    <span>🐤</span>
                    <p className="ml-3 underline">Twitter</p>
                </a>
                <a
                    className="mr-8 mb-1 flex items-center"
                    href="https://hserrano.me/freelance"
                >
                    <span>💼</span>
                    <p className="ml-3 underline">Freelance</p>
                </a>
            </div>
        </div>
    );
};

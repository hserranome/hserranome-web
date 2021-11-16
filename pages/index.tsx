import React, { ReactNode } from "react";
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
            <Content />
        </Container>
    );
};

export default Home;

export const Content: React.FC = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div>
                <img
                    alt="Avatar of a cute cat with a cartoon crown"
                    src="/static/images/avatar.png"
                    className="object-cover rounded-full h-32 w-32 mb-6"
                />
            </div>
            <div className="flex flex-col lg:flex-row mb-10">
                <div className="lg:w-1/2">
                    <h2 className="max-w-md mb-6 font-sans text-3xl sm:text-4xl font-bold tracking-tight text-gray-900  sm:leading-none xl:max-w-lg">
                        Hi! I'm{" "}
                        <span className="text-indigo-900">Hendy Serrano</span>{" "}
                        👋{" "}
                    </h2>
                </div>
                <div className="lg:w-1/2">
                    <p className="text-xl text-gray-800 md:text-xl">
                        Currently looking for freelance projects 🔍
                        <br />
                        <a
                            target="_blank"
                            href="/portolio"
                            className="text-indigo-600"
                        >
                            Check out my work in my portfolio
                        </a>
                        ✨
                    </p>
                </div>
            </div>
            <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div className="max-w-md">
                    <h6 className="mb-3 font-semibold leading-5 text-2xl">
                        About me
                    </h6>
                    <div className="leading-loose">
                        <Item title="23 years old" suffix="🧑🏽‍💻" />
                        <Item title="Madrid, Spain" suffix="🇪🇸" />
                        <Item title="Software engineer" suffix="💾" />
                        <Item title="Indie hacker" suffix="👷🏽" />
                        <Item title="Cat enthusiasm" suffix="🐈" />
                        <Item title="Pizza supporter" suffix="🍕" />
                    </div>
                </div>
                <div className="max-w-md">
                    <h6 className="mb-3 font-semibold leading-5 text-2xl">
                        Stuff I've made
                    </h6>
                    <div className="leading-loose">
                        <p className="">
                            <span className="mr-2.5">💤</span>
                            Taking a break from products
                        </p>
                        <p>
                            <span className="mr-2.5">☁️</span>
                            Working on open source
                        </p>
                    </div>
                </div>
                <div className="max-w-md">
                    <h6 className="mb-3 font-semibold leading-5 text-2xl">
                        Where to find me
                    </h6>
                    <div className="leading-loose">
                        <p className="mb-2">
                            {" "}
                            <span className="mr-2.5">🐤</span>
                            <a
                                target="_blank"
                                href="https://twitter.com/hserranome"
                            >
                                Twitter
                            </a>
                            <p className="text-xs text-gray-500">@hserranome</p>
                        </p>
                        <p className="mb-2">
                            <span className="mr-2.5">📫</span>
                            <a target="_blank" href="mailto:hendy@hserrano.me">
                                Email
                            </a>
                            <p className="text-xs text-gray-500">
                                hendy@hserrano.me
                            </p>
                        </p>
                        <p className="mb-2">
                            <span className="mr-2.5">🎒</span>
                            <a
                                target="_blank"
                                href="https://github.com/hserranome"
                            >
                                Github
                            </a>
                            <p className="text-xs text-gray-500">hserrano.me</p>
                        </p>
                        <p className="mb-2">
                            <span className="mr-2.5">💼</span>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/hendy-s-73b532b0/"
                            >
                                LinkedIn
                            </a>
                            <p className="text-xs text-gray-500">Rarely used</p>
                        </p>
                    </div>
                </div>
                <div className="max-w-md">
                    <h6 className="mb-3 font-semibold leading-5 text-2xl">
                        Things I love
                    </h6>
                    <div className="leading-loose">
                        <p className="mb-2">
                            <span className="mr-2.5">📚</span>
                            <a target="_blank" href="https://logseq.com/">
                                Logseq
                            </a>
                            <p className="text-xs text-gray-500">
                                Knowledge database
                            </p>
                        </p>
                        <p className="mb-2">
                            <span className="mr-2.5">🚀</span>
                            <a target="_blank" href="https://strapi.io/">
                                Strapi
                            </a>
                            <p className="text-xs text-gray-500">
                                Make an API fast
                            </p>
                        </p>
                        <p className="mb-2">
                            <span className="mr-2.5">🧰</span>
                            <a target="_blank" href="https://www.notion.so/">
                                Notion
                            </a>
                            <p className="text-xs text-gray-500">
                                Organization swiss army knife
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Item = (props) => {
    const { title, suffix } = props;
    return (
        <p>
            <span className="mr-2.5">{suffix}</span>
            {title}
        </p>
    );
};

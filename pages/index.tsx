import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Container } from "@components";
import SvgTwitterIcon from "@components/icons/TwitterIcon";
import SvgEmailIcon from "@components/icons/EmailIcon";

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
            {/* <Blog /> */}
            <Projects />
        </Container>
    );
};

export default Home;

const Hero: React.FC = () => {
    return (
        <div className="mx-auto px-4 pt-24 lg:pt-24 pb-14 max-w-screen-sm w-full">
            <div className="mb-6">
                <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    ¡Hello! I'm Hendy Serrano 👋
                    <br />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    <span>🚀 </span>
                    <b className="ml-1">
                        Creating digital products from scratch.
                    </b>
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
            <div className="flex flex-row text-indigo-500">
                <a
                    href="https://twitter.com/hserranome"
                    className="mr-8 flex items-center"
                >
                    <SvgTwitterIcon color="#1DA1F2" />
                    <p className="ml-1 underline">hserranome</p>
                </a>
                <a
                    href="mailto:hendy@hserrano.me"
                    className="mr-8 flex items-center"
                >
                    <span>💌</span>
                    <p className="ml-2 underline">hendy@hserrano.me</p>
                </a>

                <a
                    className="mr-8 flex items-center"
                    href="https://weekly.hserrano.me/"
                >
                    <span>🗞</span>
                    <p className="ml-2 underline">Weekly Newsletter</p>
                </a>
            </div>
        </div>
    );
};

const Blog: React.FC = () => {
    return (
        <div className="px-4 mx-auto md:px-24 lg:px-8 max-w-full md:max-w-3xl">
            <div className="flex flex-col justify-between w-full">
                <BlogYearSeparator text="2021" />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogYearSeparator text="2020" />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogYearSeparator text="2019" />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
            </div>
        </div>
    );
};

const BlogItem = ({
    title,
    date,
    link,
}: {
    title?: string;
    date?: string;
    link?: string;
}) => {
    return (
        <div className="mb-8 flex items-start">
            <p className="mr-5 w-44">{date}</p>
            <a href={link ?? ""} className="font-medium text-indigo-700	">
                {title ?? ""}
            </a>
        </div>
    );
};

const BlogYearSeparator = ({ text }: { text: string }) => {
    return (
        <div className="font-bold text-lg mt-8 mb-4">
            <p>{text ?? ""}</p>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="mx-auto px-4 pb-14 max-w-screen-sm w-full">
            <div className="flex flex-col justify-between w-screen	">
                <BlogYearSeparator text="Current projects" />
                <ProjectItem
                    title="Remote jobs board 100% in spanish — trabajosremotos.es"
                    link="https://trabajosremotos.es"
                />
                <ProjectItem
                    title="Notion templates and productivity tips in spanish — notionmango.com"
                    link="https://notionmango.com"
                />
            </div>
        </div>
    );
};

const ProjectItem = ({ title, link }: { title?: string; link?: string }) => {
    return (
        <div className="mb-4 flex items-start">
            <a href={link ?? ""} className=" text-indigo-600" target="_blank">
                {title ?? ""}
            </a>
        </div>
    );
};

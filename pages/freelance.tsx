import React from "react";
import Head from "next/head";

import { Container } from "@components";

const PROJECTS_DATA = [
    {
        title: "Comunidad Penta",
        img: "/static/images/penta.png",
        description: "Upcoming social network for classical musicians",
        technologies: "Flutter, Node.js, Strapi, PostgreSQL, Firebase",
        link: "https://comunidadpenta.com",
    },
    {
        title: "Trabajos Remotos",
        img: "/static/images/trabajos.jpeg",
        description: "Job board focusing on spanish speaking remote workers",
        technologies: "Next.js, React, Node.js, Strapi, SQLite",
        link: "https://trabajosremotos.es",
    },
    {
        title: "Notionmango",
        img: "/static/images/notion.jpeg",
        description: "Notion tips and templates in Spanish",
        technologies: "Wordpress, React",
        link: "https://notionmango.com",
    },
    {
        title: "Hobeen",
        img: "/static/images/hobeen.png",
        description: "IoT app focused on advocating a greener lifestyle",
        technologies: "React Native, Node.js, PostgreSQL",
        link: "https://www.hobeen.com",
    },
    {
        title: "Seetyz",
        img: "/static/images/seetyz.png",
        description: "Biarritz lifestyle guide for reservations and pick up",
        technologies: "React Native, React, Node.js, PostgreSQL",
        link: "https://seetyz.com",
    },
];

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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="mx-auto max-w-screen-lg w-full px-4 font-freelance text-gray-700">
                <Hero />
                <Projects />
                <Contact />
            </div>
        </Container>
    );
};

export default Home;

const Hero: React.FC = () => {
    return (
        <div className="pt-52 pb-14 mb-20">
            <h1 className="mb-6 text-6xl font-extrabold">
                Building great products
                <br /> with ReactJS.
            </h1>
            <p className="text-2xl max-w-3xl font-medium">
                I'm Hendy Serrano, a designer and developer from Madrid that has
                been developing products for over 4 years.
            </p>
        </div>
    );
};

const isEven = (num) => num % 2 === 0;

const Projects: React.FC = () => {
    const Image = ({ src }) => (
        <div className="w-2/5 rounded-lg overflow-hidden shadow-lg">
            <img src={src} alt="" />
        </div>
    );
    const Text = ({ data }) => (
        <div className={`pt-4 w-1/2`}>
            <h2 className="text-5xl font-bold mb-8">{data.title}</h2>
            <p className="text-lg mb-2 ">{data.description} </p>
            <p className="text-lg mb-8">Built with: {data.technologies}</p>
            <a
                href={data.link}
                className="underline font-medium"
                target="_blank"
                referrerPolicy="no-referrer"
            >
                Visit website{" "}
                <i
                    style={{
                        display: "inline-block",
                        textDecoration: "underline",
                        position: "relative",
                        transform: "rotateY(180deg)",
                    }}
                >
                    ⎋
                </i>
            </a>
        </div>
    );
    return (
        <div className="pb-1">
            {PROJECTS_DATA.map((project, i) => {
                const even = isEven(i);
                // return even ? (
                return (
                    <div
                        className={`flex mb-32 justify-between ${
                            even && "flex-row-reverse"
                        }`}
                        key={`project-${i}`}
                    >
                        <Image src={project.img} />
                        <Text data={project} />
                    </div>
                );
            })}
        </div>
    );
};

const Contact: React.FC = () => {
    return (
        <div className="text-center	text-2xl font-medium pb-32">
            <p>
                I'm available for freelance projects at{" "}
                <b className="underline text-indigo-600 hover:text-blue-500 transition-colors duration-200">
                    <a href="mailto:hendy@hserrano.me">hendy@hserrano.me</a>
                </b>
            </p>
        </div>
    );
};

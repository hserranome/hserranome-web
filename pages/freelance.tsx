import React from "react";
import Head from "next/head";

import { Container } from "@components";
// TODO #Freelance responsive, image optimizations, and robots check.
//  Check descriptions. Add some colors to texts. Title.

const PROJECTS_DATA = [
    {
        title: "Comunidad Penta",
        img: "/static/images/penta.png",
        description: "Upcoming social network for classical musicians.",
        technologies: "Flutter, Node.js, Strapi, PostgreSQL, Firebase.",
        link: "https://comunidadpenta.com",
        areas: "Design and development",
    },
    {
        title: "Trabajos Remotos",
        img: "/static/images/trabajos.jpeg",
        description: "Remote job board for Spanish-speaking workers.",
        technologies: "Next.js, React, Node.js, Strapi, SQLite.",
        link: "https://trabajosremotos.es",
        areas: "Design and development",
    },
    {
        title: "Notionmango",
        img: "/static/images/notion.jpeg",
        description: "Templates and tips for the Notion Spanish community.",
        technologies: "Wordpress, React.",
        link: "https://notionmango.com",
        areas: "Design and development",
    },
    {
        title: "Hobeen",
        img: "/static/images/hobeen.png",
        description: "App using IoT technology to promote a greener lifestyle.",
        technologies: "React Native, Node.js, PostgreSQL.",
        link: "https://www.hobeen.com",
        areas: "Development",
    },
    {
        title: "Seetyz",
        img: "/static/images/seetyz.png",
        description:
            "Booking, pickup, and events for small businesses in Biarritz.",
        technologies: "React Native, React, Node.js, PostgreSQL.",
        link: "https://seetyz.com",
        areas: "Development",
    },
];

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Hendy Serrano - Freelance developer</title>
                <meta
                    name="description"
                    content="Building great products with ReactJS. A designer and developer from Madrid 🌃 who has been developing products for over four years."
                />
                <meta
                    name="keywords"
                    content="ReactJS, freelance, Javascript"
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
        <div className="pt-36 md:pt-52 pb-8 md:pb-14 mb-20">
            <h1 className="mb-6 text-6xl font-extrabold leading-tight">
                Building great products
                <br /> with ReactJS.
            </h1>
            <p className="text-2xl max-w-3xl font-medium leading-snug">
                I'm <span className="text-indigo-500">Hendy Serrano</span>, a
                designer and developer from Madrid 🌃 who has been creating
                products for over four years.
            </p>
        </div>
    );
};

const isEven = (num) => num % 2 === 0;

const Projects: React.FC = () => {
    const Image = ({ src }) => (
        <div className="md:w-2/5 mb-8 md:mb-0">
            <img
                src={src}
                alt=""
                className="rounded-lg overflow-hidden shadow"
            />
        </div>
    );
    const Text = ({ data }) => (
        <div className="pt-3 md:w-1/2">
            <h2 className="text-5xl font-bold mb-4">{data.title}</h2>
            <p className="text-lg mb-4 text-gray-500">
                {data.areas} <br /> {data.technologies}
            </p>
            <p className="text-lg mb-6">{data.description} </p>
            <a
                href={data.link}
                className="underline font-medium text-indigo-800 text-opacity-90"
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
        <div className="pb-6">
            {PROJECTS_DATA.map((project, i) => {
                const even = isEven(i);
                return (
                    <div
                        className={`flex mb-24 md:mb-32 justify-between flex-col ${
                            even ? "md:flex-row-reverse" : "md:flex-row"
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
                <b className="underline text-indigo-500 hover:text-opacity-80 transition-colors duration-200">
                    <a href="mailto:hendy@hserrano.me">hendy@hserrano.me</a>
                </b>
            </p>
        </div>
    );
};

import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Container } from "@components";

const Work_DATA = [
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
            <div className="mx-auto max-w-screen-lg w-full px-8 pb-20 font-freelance text-gray-700">
                <Hero />
                <About />
                <Work />
                <p className="font-medium text-lg text-indigo-500 text-center mt-8">
                    <Link href="/">
                        <a>Go to homepage</a>
                    </Link>
                </p>
            </div>
        </Container>
    );
};

export default Home;

// - Hi
// - What I am
// - Pic of my face
// - About
// - Mail
// - Skills
// - Experience
// - Work
// - Contact

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between pt-12 lg:pt-36 pb-28">
            <div>
                <h1 className="text-lg lg:text-xl leading-tight mb-3">
                    Hello, my name is Hendy Serrano and I am a{" "}
                </h1>
                <p className="text-2xl lg:text-2xl max-w-xl font-medium mb-3 leading-normal">
                    Freelance developer with a knack for design. Specialized in
                    React, Next.js, Node.js, and more. <br /> Based in Madrid 🌃
                </p>
                <p className="font-medium text-lg text-indigo-500">
                    <a href="mailto:hendy@hserrano.me">hendy@hserrano.me</a>
                </p>
            </div>
            <div className="">
                <img
                    alt="Avatar of a cute cat with a cartoon crown"
                    src="/static/images/avatar.png"
                    className="object-cover rounded-full h-32 w-32 lg:h-64 lg:w-64 mb-7"
                />
            </div>
        </div>
    );
};

export const About = () => {
    return (
        <div className="pb-24">
            <h2 className="text-3xl font-bold mb-10 lg:text-center">About</h2>
            <div className="text-base md:text-lg max-w-2xl text-justify lg:mx-auto">
                <p>
                    At the age of ten, I set up my own Minecraft server and
                    posted it on a forum so that other people could play with
                    me. I've been tinkering with technology ever since. I became
                    more and more interested in development, and I started
                    working as a web developer at 18.
                </p>
                <br />
                <p>
                    I started out as a freelancer and then worked for companies
                    as a developer, lead developer, scrum master, and had a try
                    at being CTO.
                </p>
                <br />
                <p>
                    I've always enjoyed UI design and I'm always trying to
                    improve the user experience on everything I build, even
                    though my main role is development.
                </p>
            </div>
        </div>
    );
};

const Work: React.FC = () => {
    const Image = ({ src }) => (
        <div className="md:w-2/5 mb-6 md:mb-0">
            <img
                src={src}
                alt=""
                className="rounded-lg overflow-hidden shadow"
            />
        </div>
    );
    const Text = ({ data }) => (
        <div className="pt-0 lg:pt-3 md:w-1/2">
            <h2 className="text-2xl font-medium mb-4">{data.title}</h2>
            <p className="mb-3">{data.description}</p>
            <p className="mb-4 text-gray-500">{data.technologies}</p>
            <a
                href={data.link}
                className="font-medium text-indigo-800 text-opacity-90"
                target="_blank"
                referrerPolicy="no-referrer"
            >
                Visit website{" "}
                <i
                    style={{
                        display: "inline-block",
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
            <h2 className="text-3xl font-bold mb-10 sm:mb-12 lg:text-center">
                Work
            </h2>
            {Work_DATA.map((project, i) => (
                <div
                    className="flex mb-16 justify-between flex-col md:flex-row"
                    key={`project-${i}`}
                >
                    <Image src={project.img} />
                    <Text data={project} />
                </div>
            ))}
        </div>
    );
};

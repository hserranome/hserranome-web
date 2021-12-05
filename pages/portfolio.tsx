import React from "react";
import Head from "next/head";
import Link from "next/link";

const Work_DATA = [
    {
        title: "Comunidad Penta",
        img: "/static/images/penta.png",
        description:
            "Social network for classical musicians, working with conservatories to provide musicians an online meeting spot where they can share their art with other professionals.",
        position: "Co-founder, UI/UX design, development.",
        technologies: "Flutter, Node.js, Strapi, PostgreSQL, Firebase.",
        link: "https://comunidadpenta.com",
    },
    {
        title: "Hobeen",
        img: "/static/images/hobeen.png",
        description:
            "IoT Android and iOS app integrating well known devices from multiple brands in a single app, with gamification at it's core to help people to be more eco-friendly.",
        position: "Lead developer.",
        technologies: "React Native, Node.js, PostgreSQL.",
        link: "https://www.hobeen.com",
    },
    {
        title: "Seetyz",
        img: "/static/images/seetyz.png",
        description:
            "iOS and Android app and business dashboard empowering small businesses in Biarritz, giving customers tools for booking, pickup, and events.",
        technologies: "React Native, React, Node.js, PostgreSQL.",
        position: "Lead developer.",
        link: "https://seetyz.com",
    },
    {
        title: "Trabajos Remotos",
        img: "/static/images/trabajos.jpeg",
        description:
            "Job board providing a platform for employers to find the best Spanish-speaking remote workers from LATAM and Spain.",
        technologies: "Next.js, React, Node.js, Strapi, SQLite.",
        position: "Co-founder, UI/UX design, development.",
        link: "https://trabajosremotos.es",
    },
    {
        title: "Notionmango",
        img: "/static/images/notion.jpeg",
        description:
            "Blog sharing templates, tips, and thougts around the Notion spanish-speaking community.",
        technologies: "Wordpress, React.",
        position: "Co-founder, UI/UX design, development.",
        link: "https://notionmango.com",
    },
];

const Portfolio: React.FC = () => {
    return (
        <div className="min-h-screen p-4">
            <Head>
                <title>
                    Hendy Serrano | Full-stack developer | React, Node.js,
                    Next.js, and more
                </title>
                <meta
                    name="description"
                    content="Full-stack developer with a knack for design. Specialized in React, Next.js, Node.js, and more. Based in Madrid 🌃"
                />
                <meta
                    name="keywords"
                    content="ReactJS, full stack, developer, React Native, Node.js, Express.js, freelance, Javascript"
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
            <div className="mx-auto max-w-screen-lg w-full pb-20 font-freelance text-gray-700">
                <Hero />
                <About />
                <Skills />
                {/* Experience */}
                <Work />
                {/* Contact with email, call scheduling, and rates */}
                <div className="font-medium  text-xl text-center">
                    <p className="pt-8">
                        Get in touch —{" "}
                        <a
                            href="mailto:hendy@hserrano.me"
                            className=" text-indigo-500"
                        >
                            hendy@hserrano.me
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between pt-16 lg:pt-36 pb-20">
            <div>
                <h1 className="text-base lg:text-xl leading-tight mb-3">
                    Hello, my name is Hendy Serrano and I am a{" "}
                </h1>
                <p className="text-2xl lg:text-2xl max-w-xl font-medium mb-3 leading-normal">
                    Full-stack developer with a knack for design.{" "}
                    <span className="text-indigo-900">
                        Proficient in React, Next.js, Node.js, and more.
                    </span>
                </p>
                <p className="font-medium text-lg text-gray-500">
                    Based in Madrid 🌃
                </p>
                <div className="font-medium text-lg text-left">
                    <p className="pt-8">
                        Get in touch —{" "}
                        <a
                            href="mailto:hendy@hserrano.me"
                            className=" text-indigo-500"
                        >
                            hendy@hserrano.me
                        </a>
                    </p>
                </div>
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

const About: React.FC = () => {
    return (
        <div className="pb-20">
            <h2 className="text-3xl font-bold mb-10 lg:text-center">About</h2>
            <div className="text-base md:text-lg max-w-2xl text-justify lg:mx-auto">
                <p>
                    I've been interested in sofware and development ever since I
                    setup my first public Minecraft server at the age of ten,
                    which had around 40 players at one point. Later, I started
                    working as a web developer when I was nineteen.
                </p>
                <br />
                <p>
                    I started out as a freelancer in 2018 and then worked in{" "}
                    <a
                        href="https://akimad.com"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        Akimad
                    </a>{" "}
                    (February 2019 - July 2021) on +10 full-stack developer, and
                    later as lead developer in an agile workflow.
                </p>
                <br />
                <p>
                    I've always enjoyed UI/UX design and I'm always looking for
                    ways to improve the user experience on everything I work on
                    through both development and design.
                </p>
            </div>
        </div>
    );
};

const Sep: React.FC = () => <span className="text-indigo-500 mx-3">❖</span>;

// Outgoing links for each one of the skills
const Skills: React.FC = () => {
    return (
        <div className="pb-20">
            <h2 className="text-3xl font-bold mb-10 lg:text-center">
                Technologies
            </h2>
            <div className="max-w-2xl lg:mx-auto">
                <div className="mb-6">
                    <p className="font-semibold text-lg md:text-xl mb-1">
                        Front-end
                    </p>
                    <p className="text-base md:text-lg">
                        JavaScript <Sep /> Single-page Applications (SPA){" "}
                        <Sep /> ES6, TypeScript <Sep /> React <Sep /> Redux{" "}
                        <Sep /> Next.js <Sep /> Gatsby <Sep /> TypeScript{" "}
                        <Sep /> CSS/SCSS <Sep /> React Native <Sep /> Material
                        UI <Sep /> Tailwind CSS
                    </p>
                </div>
                <div className="mb-6">
                    <p className="font-semibold text-lg md:text-xl mb-1">
                        Back-end
                    </p>
                    <p className="text-base md:text-lg">
                        Node.js <Sep /> Express <Sep /> SQL (PostgreSQL/MySQL){" "}
                        <Sep /> MongoDB <Sep /> REST <Sep /> Strapi (Headless
                        CMS) <Sep /> Firebase <Sep /> Third-party APIs (Google
                        Maps, Stripe, etc.)
                    </p>
                </div>

                <div className="mb-6">
                    <p className="font-semibold text-lg md:text-xl mb-1">
                        Other
                    </p>
                    <p className="text-base md:text-lg">
                        Search engine optimization (SEO) <Sep /> Heroku <Sep />{" "}
                        Ubuntu <Sep /> AWS <Sep /> Netlify <Sep /> Docker{" "}
                        <Sep /> Git <Sep /> GitHub <Sep /> UI design <Sep /> UX
                        (User Experience)
                    </p>
                </div>
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
                className="rounded-lg overflow-hidden shadow-md"
            />
        </div>
    );
    const Text = ({ data }) => (
        <div className="pt-0 lg:pt-3 md:w-1/2">
            <h2 className="text-2xl font-medium mb-4">{data.title}</h2>
            <p className="mb-4">{data.description}</p>
            {/* <p className="mb-2">
                <b className="font-medium">Role:</b> {data.position}
            </p> */}
            <p className="mb-3">
                <b className="font-medium">Tech stack:</b> {data.technologies}
            </p>
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
                Projects
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

import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "PostYojna AI",
    img: "/postyojnaai.png",
    desc: "SIH 2023 winning project - A web-based AI-driven platform that optimizes financial and insurance service delivery by India Post. Features include centralized data visualization, AI-powered scheme recommendations, optimized event scheduling, and voice-based feedback analysis using NLP. Tech Stack: React.js, Node.js, Express.js, MongoDB, Scikit-Learn, NLP.",
    githubLink: "https://github.com/Nikhita1504/PostYojna_AI" // Replace with actual link
  },
  {
    id: 2,
    title: "WeFit",
    img: "/WeFit.png",
    desc: "Blockchain and AI-powered fitness platform that personalizes workouts and verifies user activity via Smartwatch/Google Fit APIs and OpenCV. Implemented gamified features like milestone-based refunds and community challenges. Includes secure blockchain subscriptions and point-to-cash rewards. Tech Stack: React.js, Node.js, Express.js, MongoDB, OpenCV, Google Fit APIs, Blockchain.",
    githubLink: "https://github.com/Nikhita1504/WeFit" // Replace with actual link
  },
  {
    id: 3,
    title: "TeamUp",
    img: "/TeamUp.png",
    desc: "Platform enabling students to find and connect with batchmates for hackathons and events. Features streamlined team formation based on tech stacks and JWT-based authentication. Tech Stack: React.js, Node.js, Express.js, MongoDB, JWT authentication,Socket.io",
    githubLink: "https://github.com/Nikhita1504/Hackathon_Website" // Replace with actual link
  },
  {
    id: 4,
    title: "WanderLust",
    img: "/WanderLust.png",
    desc: "Travel destination landing page showcasing beautiful locations with interactive features. Designed with responsive UI/UX principles and smooth animations. Tech Stack: HTML, CSS3, Javascript",
    githubLink: "https://wanderlust-cc8cc7.netlify.app/" // Replace with actual link
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleSeeMore = () => {
    window.open(item.githubLink, "_blank");
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleSeeMore}>See More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
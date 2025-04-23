import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/nikhita-d-a23438249/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" size={20} />
          </a>
          <a href="https://github.com/Nikhita1504" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon"  size={20} />
          </a>
          <a href="https://www.instagram.com/nikhita._0101/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon"  size={20} />
          </a>
          <a href="mailto:nikhitadas.37@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="icon"  size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
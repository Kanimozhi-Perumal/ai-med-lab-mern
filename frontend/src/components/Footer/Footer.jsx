import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo1.png";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://github.com/Kanimozhi-Perumal",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/kanimozhi-perumal-673046280/",
    icon: <AiFillLinkedin className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "mailto:perumalkanimozhi1@gmail.com",
    icon: <AiOutlineMail className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About Us" },
  { path: "/services", display: "Services" },
  { path: "/", display: "Blog" },
];

const quickLinks02 = [
  { path: "/find-a-doctor", display: "Find a Doctor" },
  { path: "/about", display: "Request an Appointment" },
  { path: "/", display: "Find a Location" },
  { path: "/", display: "Get an Opinion" },
];

const quickLinks03 = [
  { path: "/", display: "Donate" },
  { path: "/contact", display: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">

          {/* ===== Logo & Social ===== */}
          <div>
            <img
              className="w-28 h-20 object-fill overflow-hidden"
              src={logo}
              alt="logo"
            />

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  href={link.path}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none transition"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ===== Quick Links ===== */}
          <div>
            <h2 className="text-[20px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] text-textColor hover:text-primaryColor transition"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== I want to ===== */}
          <div>
            <h2 className="text-[20px] font-[700] mb-6 text-headingColor">
              I want to
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] text-textColor hover:text-primaryColor transition"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Support ===== */}
          <div>
            <h2 className="text-[20px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] text-textColor hover:text-primaryColor transition"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

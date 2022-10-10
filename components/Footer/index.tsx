import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDev,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

type FooterProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const footer = {
  links: [
    {
      id: "1",
      href: "https://dev.to/hiro9108",
      label: "Dev community",
      icon: faDev,
    },
    {
      id: "2",
      href: "https://github.com/hiro9108",
      label: "GitHub",
      icon: faGithub,
    },
    {
      id: "3",
      href: "https://linkedin.com/in/hiroshiegawa/",
      label: "Linkedin",
      icon: faLinkedin,
    },
  ],
  copyright: "HIROSHI EGAWA PERSONAL WEB DEVELOPMENT SERVICES",
};

/**
 * Additional Docs
 */
export const Footer = () => {
  return (
    <footer className="py-4 text-center text-white bg-slate-700 ">
      <div className="flex justify-center items-center mb-2">
        {/* {footer.links.map((link) => (
          <a
            key={link.id}
            className="mx-4"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            <FontAwesomeIcon icon={link.icon} size="2x" />
          </a>
        ))} */}
      </div>
      <div>
        <small>
          &copy; {new Date().getFullYear()} HIROSHI EGAWA PERSONAL WEB
          DEVELOPMENT SERVICES
        </small>
        {/* <small>
          &copy; {new Date().getFullYear()} {footer.copyright}
        </small> */}
      </div>
    </footer>
  );
};

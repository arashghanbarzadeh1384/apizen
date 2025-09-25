import React from "react";
import styles from "./SocialButton.module.css";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

interface SocialLink {
  platform: "telegram" | "whatsapp" | "linkedin" | "instagram";
  url: string;
  icon: JSX.Element;
}

const socialLinks: SocialLink[] = [
  {
    platform: "telegram",
    url: "https://t.me/yourusername",
    icon: <FaTelegramPlane size={24} />,
  },
  {
    platform: "whatsapp",
    url: "https://wa.me/yourphonenumber",
    icon: <FaWhatsapp size={24} />,
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/yourusername",
    icon: <FaLinkedin size={24} />,
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/yourusername",
    icon: <FaInstagram size={24} />,
  },
];

const SocialButton: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {socialLinks.map((link) => (
          <li
            key={link.platform}
            className={`${styles.icon} ${styles[link.platform]}`}
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <span className={styles.tooltip}>{link.platform}</span>
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialButton;

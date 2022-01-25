import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <section className="footer-links">
        <a href="https://github.com/kmwine02" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/katie-wine-06597670/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </section>
    </div>
  );
}

export default Footer;

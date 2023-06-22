// Import Assets
import resume from "../assets/SOLIDITYV2.pdf";
import profile from "../assets/profilowe.png";

const Header = () => {
  return (
    <section className="header">
      <img src={profile} alt="John Doe" />

      <div className="header__content">
        <h1>Hi, I'm Marcin Łętowski</h1>
        <p>Blockchain Developer</p>
        <a href="mailto:marcino53605@gmail.com">
          <button className="button">Get In Touch</button>
        </a>
        <a href={resume}>
          <button className="button">View Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Header;

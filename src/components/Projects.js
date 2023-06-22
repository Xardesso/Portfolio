// Import Assets
import menagment from "../assets/menagment.png";
import realestate from "../assets/realestate.png";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>Identity Management Daap</h3>
          <img src={menagment} alt="Identity Management" />
          <p>
            With DAPP Identity Management, users can regain control over their
            personal data and have the freedom to manage their identities across
            various decentralized platforms. We prioritize privacy and security,
            ensuring that users' sensitive information remains protected through
            cryptographic protocols and distributed consensus mechanisms.
          </p>

          <a
            href="https://xardesso.github.io/DAPP-identity-management/"
            target="_blank"
            className="button"
          >
            Site
          </a>
          <a
            href="https://github.com/Xardesso/DAPP-identity-management"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Real Estate Auction Dapp</h3>
          <img src={realestate} alt="Real Estate Dapp" />
          <p>
            Our platform empowers users to manage their property investments
            securely and efficiently across decentralized networks. We
            prioritize your privacy and safeguard your sensitive information
            using advanced cryptographic protocols.You no longer have to rely on
            intermediaries or worry about the transparency of your transactions.
          </p>

          <a
            href="https://xardesso.github.io/WEB3-APP-real-estate-v2/"
            target="_blank"
            className="button"
          >
            Site
          </a>
          <a
            href="https://github.com/Xardesso/WEB3-APP-real-estate-v2"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Other Smart Contracts</h3>
          <p>
            Those smart contracts showcases the innovative work and
            contributions in the realm of DAPPs and blockchain technology.
            Within this repository, you will find a diverse range of smart
            contracts that cater to various use cases . Each smart contract has
            been carefully designed and developed to leverage the power of
            blockchain, enabling trust, transparency, and efficiency . As you
            explore this repository, you'll discover the versatility of smart
            contracts and their impact on reshaping industries. Feel free to
            dive into the individual contract repositories to learn more about
            their specific features, implementations, and the underlying
            blockchain technologies they utilize.
          </p>

          <center>
            <a
              href="https://github.com/Xardesso?tab=repositories"
              target="_blank"
              className="button"
            >
              Code
            </a>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Projects;

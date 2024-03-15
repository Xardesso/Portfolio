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
          <h3>Arbitrage Bot</h3>
          <p>
            This project involves the development of an advanced arbitrage bot
            that leverages the power of flashloans. The bot is designed to
            exploit price differences between two popular decentralized
            exchanges, Sushiswap and Uniswap.The bot operates by borrowing
            assets at a low price from one exchange using a flashloan, and then
            immediately selling the assets at a higher price on the other
            exchange. This process, known as arbitrage, allows the bot to
            generate profit from the price discrepancy between the two
            exchanges.The use of flashloans in this bot is a key feature.
            Flashloans are a type of loan in DeFi where no upfront collateral is
            required, as long as the loan is repaid within the same transaction.
          </p>

          <center>
            <a
              href="https://github.com/Xardesso/ArbitrageBot"
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

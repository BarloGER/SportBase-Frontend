import { Helmet } from "react-helmet";
import "../styles/aboutUs.css";

function AboutUs() {
  return (
    <main className="aboutUs">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Über uns Seite mit Informationen über Gründer."
        />
      </Helmet>
      <div className="aboutUs-container">
        <div className="content-container">
          <h1 className="gettoknowus">Über uns</h1>
          <div className="aboutUs-Team">
            <div className="personal-card">
              <a
                href={"https://github.com/BarloGER"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageFounders"
                  src={"https://avatars.githubusercontent.com/u/108719328?v=4"}
                  alt="img from Mike"
                />
              </a>
              <h1 className="aboutUs-name">Mike</h1>
              <p className="about-each">
                Hey, ich bin Mike, 25 Jahre jung. Die letzten 8 Jahre war ich
                Soldat und habe mich für einen Karriere wechsel entschieden.
              </p>
            </div>
            <div className="personal-card" id="margin">
              <a
                href={"https://github.com/niklasriebesell"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageFounders"
                  src={"https://avatars.githubusercontent.com/u/72032551?v=4"}
                  alt="img from Niklas"
                />
              </a>
              <h1 className="aboutUs-name">Niklas</h1>
              <p className="about-each">
                Ich bin Niklas - footballbegeistert und leiderprobt. Das
                beschreibt mich und meine Erfahrung mit Organisationsapps rund
                um den Teamsport wohl am Besten. Statt nur zu klagen, wollte ich
                daran etwas ändern und konnte meine zweite Leidenschaft, das
                Programmieren, gemeinsam mit meinen beiden Kollegen dazu nutzen,
                um eine App / Website entwickeln, die das mitbringt, was ein
                Team wirklich braucht – von Spielern, für Spieler.
              </p>
            </div>

            <div className="personal-card" id="margin">
              <a
                href={"https://github.com/OtisB"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageFounders"
                  src={"https://avatars.githubusercontent.com/u/40917011?v=4"}
                  alt="img from Robin"
                />
              </a>
              <h1 className="aboutUs-name">Robin</h1>
              <p className="about-each">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                praesentium. Optio quod maxime ad! Ex, molestias quas commodi
                fuga recusandae et inventore veritatis officia. Quibusdam
                aliquid tempora temporibus ab excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;

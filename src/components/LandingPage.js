import "../styles/landingPage.css";

export default function LandingPage() {
  return (
    <main className="landing-page">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Willkommen bei SportBase</h1>
          <h2 className="hero-subtitle">Your Sport is our passion</h2>
          <button type="button" className="hero-button" onClick="#">
            Erfahrt mehr über uns &raquo;
          </button>
        </div>
        <article className="text-container ">
          <span>
            Ein aktives Leben erfordert eine menge Organisation. Wer kennt es
            nicht, das Problem seine Trainings, Orte und Spieltage zu
            organisieren. Die WhatsApp Gruppen Quillen über, keiner ist
            informiert und es herrscht das pure Chaos. Zettelwirtschaft,
            vergessene Termine und unzufriedene Teamkollegen sind die folge.
            Hier schafft SportBase Abhilfe. SportBase, hilft dir dabei deine
            Trainings, Orte und Spieltage zu organisieren. Du kannst
            kinderleicht neue Trainings erstellen, anpassen oder verschieben um
            nicht wieder im Regen zu stehen wenn das Wetter mal wieder nicht
            mitspielt.
          </span>
          <br />
          <span>
            Ob gemütlicher Championsleague Abend oder doch ein Grillabend mit
            den Teamkollegen, kein Problem. Mit Sportbase kannst du in Sekunden
            deinen nächsten Teamabend planen und mit der Pushfunktion sparst du
            dir lästige Nachrichten in zu verschicken. So ist jeder informiert
            und dem Abend steht nichts im Weg.
          </span>
          <br />
          <span>
            Das nächste Auswärtsspiel steht an und du hast noch keine
            Mitfahrgelegenheit ? Kein Problem. Mit Sportbase helfen wir auch
            auch bei diesem Problem. SportBase erleichtert dein sportliches
            Leben, sodass du mehr Zeit für die wichtigen Dinge hast.
          </span>
        </article>
      </div>
    </main>
  );
}

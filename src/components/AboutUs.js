import "../styles/aboutUs.css";

function AboutUs() {
  return (
    <main className="about-us">
      <h1 className="gettoknowus">get to know us</h1>
      <div className="about-us-Team">
        <div className="personal-card">
          <a
            href={"https://github.com/BarloGER"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="imageFounders"
              src={
                "https://png.pngitem.com/pimgs/s/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"
              }
              alt="img from Mike"
            />
          </a>
          <h1 className="about-us-name">Mike</h1>
          <p className="about-each">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quisquam, aliquam odio commodi repellat quia aspernatur fugiat
            mollitia. Harum eligendi doloribus consectetur laudantium totam
            minus quis reprehenderit accusantium ad fugit!
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
              src={
                "https://png.pngitem.com/pimgs/s/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"
              }
              alt="img from Niklas"
            />
          </a>
          <h1 className="about-us-name">Niklas</h1>
          <p className="about-each">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            praesentium. Optio quod maxime ad! Ex, molestias quas commodi fuga
            recusandae et inventore veritatis officia. Quibusdam aliquid tempora
            temporibus ab excepturi.
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
              src={
                "https://png.pngitem.com/pimgs/s/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"
              }
              alt="img from Robin"
            />
          </a>
          <h1 className="about-us-name">Robin</h1>
          <p className="about-each">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            praesentium. Optio quod maxime ad! Ex, molestias quas commodi fuga
            recusandae et inventore veritatis officia. Quibusdam aliquid tempora
            temporibus ab excepturi.
          </p>
        </div>
      </div>
      <section className="about-SportBase">
        <p className="our-passion">
          An active life requires a lot of organization. Who doesn't know the
          problem of organizing trainings, locations and game days? The WhatsApp
          groups are overflowing, no one is informed and there is pure chaos.
          Paperwork, forgotten appointments and dissatisfied teammates are the
          result. SportBase is the remedy. SportBase helps you to organize your
          trainings, locations and game days. You can easily create new
          trainings, adjust or postpone them to avoid being left out in the rain
          when the weather doesn't play along. Whether it's a cozy Champions
          League evening or a barbecue with your teammates, no problem. With
          Sportbase you can plan your next team evening in seconds and with the
          push function you save yourself the hassle of sending messages. So
          everyone is informed and nothing stands in the way of the evening. The
          next away game is coming up and you don't have a ride yet? No problem.
          With Sportbase we can help you with this problem as well. SportBase
          makes your sports life easier, so you have more time for the important
          things. Your Sport is our passion
        </p>
      </section>
    </main>
  );
}

export default AboutUs;

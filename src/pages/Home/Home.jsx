import Avatar from "../../assets/avatar.jpg";
import CV from "../../assets/cv.pdf";
import "./style.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="job-header">Backend Developer</h1>
      <div className="job-body">
        <div className="my-name">Ege Çakmak</div>
        <div className="job-description">
          I'm a backend developer with a passion for all things front-end.
          Welcome to my corner of the internet. Glad to have you here! Click
          below to contact me
        </div>
        <a
          className="cv-download-button"
          href={CV}
          download="egecakmak-cv"
          target="_blank"
          rel="noreferrer"
        >
          Hire Me!
        </a>
      </div>
      <img className="avatar" src={Avatar} alt="avatar" />
    </div>
  );
};

export default Home;

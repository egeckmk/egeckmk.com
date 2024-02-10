import Avatar from "../assets/avatar.jpg";
import CV from "../assets/cv.pdf";

const Home = () => {
  return (
    <div>
      <h1 className="text-lg text-center sm:text-2xl md:text-4xl text-amber-400 font-extrabold mb-8">
        Fullstack Developer
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="text-xl md:text-3xl font-light mb-4">Ege Çakmak</div>
          <div className="font-extralight mb-4">
            I'm a full stack developer with a passion for all things front-end.
            Welcome to my corner of the internet. Glad to have you here! Click
            below to contact me
          </div>
          <div className="flex md:justify-start">
            <a
              className="w-full"
              href={CV}
              download="egecakmak-cv"
              target="_blank"
              rel="noreferrer"
            >
              <button className="duration-700 hover:scale-125 bg-amber-400 rounded-lg text-2xl px-2 py-2  w-full md:w-1/2">
                Hire Me!
              </button>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center order-1 md:order-2">
          <img className="w-56 rounded-full" src={Avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Home;

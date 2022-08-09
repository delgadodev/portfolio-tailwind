import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <>
      <div id="about" className="w-5/6 mx-auto divider"></div>
      <div className="w-5/6 mx-auto mt-14 lg:container lg:max-w-5xl">
        <p className="mb-5 text-xl font-bold text-center text-white">
          About me
        </p>

        <p className="text-zinc-400">
          Im a front end developer with a passion for creating beautiful and
          functional websites. I have a semistrong background in web
          development. I have a strong passion for learning new technologies and
          frameworks.
        </p>

        <p className="my-5 font-semibold text-center text-yellow-500">
          Technologies
        </p>

        {/* CAROUSEL ANIMATION */}

        <div className="flex justify-center">
        <div className="gap-10 carousel">
          <FontAwesomeIcon color="white" size="4x" icon={faReact} />
          <FontAwesomeIcon color="white" size="4x" icon={faJs} />
          <FontAwesomeIcon color="white" size="4x" icon={faHtml5} />
          <FontAwesomeIcon color="white" size="4x" icon={faBootstrap} />
          <FontAwesomeIcon color="white" size="4x" icon={faCss3} />
          <FontAwesomeIcon color="white" size="4x" icon={faNodeJs} />
        </div>
        </div>
      </div>
    </>
  );
};

export default About;

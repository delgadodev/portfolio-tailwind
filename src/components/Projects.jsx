import Project from "./Project";
import { proyectos } from "../proyectos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <>
      <div id="projects" className="w-5/6 mx-auto mt-16 lg:container lg:max-w-5xl">
        <p className="text-lg font-semibold text-primary">My projects</p>
        <p className="text-xl font-bold text-white">
          See some of my lastets jobs
        </p>

        <div className="grid gap-5 mt-10 md:grid-cols-3">
          {proyectos.map((proyecto) => (
            <Project id={proyecto.id} proyecto={proyecto} />
          ))}

          <a
            href="https://github.com/xhungen"
            target="_blank"
            className="hidden shadow-xl md:card bg-zinc-900"

          >
            <div className="grid h-80 place-content-center">
              <p className="text-xl font-bold text-white">
                More on my github...
              </p>
              <FontAwesomeIcon
                color="white"
                size="3x"
                icon={faGithub}
                className="mx-auto mt-5"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;

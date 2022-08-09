const Project = ({ proyecto }) => {
  const { id, name, description, image, url, stack } = proyecto;

  return (
    <div className="card bg-zinc-900 shadow-xl hover:transform hover:scale-105 transition-all">
      <img src={image} alt="" />
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <div>
          {stack.map((tech) => (
            <span
              key={tech}
              className="badge badge-primary badge-outline mr-2 "
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="card-text text-zinc-400">{description}</p>
        <a href={url} target="_blank" className="btn btn-link">
          Go to project
        </a>
      </div>
    </div>
  );
};

export default Project;

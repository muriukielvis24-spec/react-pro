function ProjectCard({ project }) {
  return (
    <div className="card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span>{project.category}</span>
    </div>
  );
}

export default ProjectCard; 
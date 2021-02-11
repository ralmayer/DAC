import Project from "./Project";

export default function Projects({ data, variants, childVariants }) {
  return (
    <section className="home projects" id="projects">
      <div className="section-content">
        {data.map((project) => (
          <Project
            key={project.title}
            project={project}
            variants={variants}
            childVariants={childVariants}
          />
        ))}
      </div>
    </section>
  );
}

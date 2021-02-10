import Project from "./Project";
import { useEffect } from "react";

export default function Projects({ data, variants, childVariants }) {
  return (
    <section className="home projects">
      <div className="section-content">
        {data.map((project) => (
          <Project
            project={project}
            variants={variants}
            childVariants={childVariants}
          />
        ))}
      </div>
    </section>
  );
}

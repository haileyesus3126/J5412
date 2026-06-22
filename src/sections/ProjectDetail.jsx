// src/pages/ProjectDetail.jsx

import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projectsData";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = useMemo(
    () => PROJECTS.find((p) => p.slug === slug),
    [slug]
  );

  if (!project) {
    return (
      <section className="project-detail">
        <div className="project-detail-inner">
          <h1 className="pd-title">Project Not Found</h1>
          <p className="pd-desc">The project you are looking for does not exist.</p>

          <Link to="/" className="pd-btn primary">
            Back Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <div className="project-detail-inner">
        <Link to="/" className="back-link">
          ← Back to Portfolio
        </Link>

        <header className="pd-header">
          <div>
            <p className="pd-label">Project</p>
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-desc">{project.desc}</p>
          </div>

          <div className="pd-actions">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="pd-btn primary"
            >
              Live Demo
            </a>

            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="pd-btn ghost"
            >
              GitHub Code
            </a>
          </div>
        </header>

        <div className="pd-cover">
          <img src={project.image} alt={project.title} />
        </div>

        {project.technologies?.length > 0 && (
          <section className="pd-card">
            <h2>Technologies Used</h2>

            <div className="pd-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </section>
        )}

        {project.features?.length > 0 && (
          <section className="pd-card">
            <h2>Key Features</h2>

            <ul className="pd-features">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {project.screenshots?.length > 0 && (
          <section className="pd-card">
            <h2>Screenshots</h2>

            <div className="pd-screenshots">
              {project.screenshots.map((img, index) => (
                <div className="pd-shot" key={index}>
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
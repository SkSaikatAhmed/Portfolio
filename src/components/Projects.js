import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      {/* ========== Major Projects ========== */}
      <h3 className="section-title">Major Projects</h3>

      <div className="projects-container">

        <div className="project-card">
          <h4>Video Insight AI</h4>
          <p>
            A web app that converts video to text, summarizes content, and
            generates notes using NLP and ML models.
          </p>
          <a href="https://github.com/Preetam2023/Video-Insight-AI" target="_blank">View Project</a>
        </div>

        <div className="project-card">
          <h4>MPN Disease Classification</h4>
          <p>
            Machine learning system for classifying bone marrow MPN diseases using
            VST normalization, PCA, DESeq2, and Autoencoders.
          </p>
          <a href="#" target="_blank">View Project</a>
        </div>

      </div>


      {/* ========== Minor Projects ========== */}
      <h3 className="section-title">Minor Projects</h3>

      <div className="projects-container">

        <div className="project-card">
          <h4>Basic Calculator</h4>
          <p>
            A simple calculator website built with HTML, CSS, and JavaScript that
            performs basic arithmetic operations.
          </p>
          <a href="https://github.com/SkSaikatAhmed/Calculator_mini_project" target="_blank">View Project</a>
        </div>

        <div className="project-card">
          <h4>Portfolio Website</h4>
          <p>
            My personal portfolio website created using React.js to showcase my
            skills, projects, and experience.
          </p>
          <a href="https://github.com/SkSaikatAhmed/Portfolio" target="_blank">View Project</a>
        </div>

        <div className="project-card">
          <h4>To-Do List App</h4>
          <p>
            A simple JavaScript to-do application with add, delete, and mark-done
            features.
          </p>
          <a href="https://github.com/SkSaikatAhmed/TodoList" target="_blank">View Project</a>
        </div>

      </div>
    </section>
  );
}

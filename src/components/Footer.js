import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Sheikh Saikat Ahmed. All Rights Reserved.</p>

      <div className="footer-links">
        <a href="https://github.com/SkSaikatAhmed" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/sk-saikat-ahmed-887124245/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>

      <a className="back-to-top" href="#top">↑ Back to Top</a>
    </footer>
  );
}

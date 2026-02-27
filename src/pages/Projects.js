function Projects() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Projects</h1>

      <div style={card}>
        <h3>Doctor Search Website</h3>
        <p>
          A web application that allows users to search doctors by
          specialization and location. Built using HTML, CSS, and
          JavaScript.
        </p>
      </div>

      <div style={card}>
        <h3>Personal Portfolio Website</h3>
        <p>
          A professional portfolio website built with React to showcase
          my skills, projects, and contact information.
        </p>
      </div>
    </div>
  );
}

const card = {
  border: "1px solid #ddd",
  padding: "20px",
  marginBottom: "20px",
  borderRadius: "8px",
};

export default Projects;
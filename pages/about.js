import Header from "../components/Header";
export default function About() {
  return (
    <>
      <head>
        <title>About me | My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <header>
        <nav>
          <div className="logo">Ruslana</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a className="active">About me</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contacts</a></li>
          </ul>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <main>
        <section className="about-section">
          <h1>About me</h1>
          <p>
            Hello! I am Ruslana, a frontend developer. I enjoy creating
            beautiful and user-friendly interfaces, and I am learning modern
            web development technologies.
          </p>

          <h2>Skills</h2>
          <ul className="skills">
            <li>HTML5 / CSS3 / JavaScript</li>
            <li>React / Vue</li>
            <li>Responsive Design</li>
            <li>Git / GitHub</li>
          </ul>

          <h2>Education</h2>
          <p>Dnipro Institute of Infrastructure and Transport</p>
          <p>AIT TR GmbH</p>
        </section>
      </main>

      <style jsx>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        header {
          background: white;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }

        .logo {
          font-weight: bold;
          font-size: 1.5rem;
          color: #4da6ff;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 1.5rem;
        }

        .nav-links li a {
          text-decoration: none;
          color: #333;
          transition: color 0.3s;
        }

        .nav-links li a.active,
        .nav-links li a:hover {
          color: #4da6ff;
        }

        .about-section {
          max-width: 900px;
          margin: 4rem auto;
          padding: 2rem;
        }

        .skills {
          list-style: square;
          padding-left: 1.5rem;
        }
      `}</style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            hamburger?.addEventListener('click', () => {
              navLinks.classList.toggle('active');
            });
          `,
        }}
      />
    </>
  );
}
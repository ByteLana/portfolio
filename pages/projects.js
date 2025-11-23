import Header from "../components/Header";
export default function Projects() {
  return (
    <>
      <head>
        <title>Projects | My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <header>
        <nav>
          <div className="logo">Ruslana</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About me</a></li>
            <li><a className="active">Projects</a></li>
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
        <section className="projects-section">
          <h1>My projects</h1>
          <div className="projects-grid">

            <div className="project-card">
              <img src="/images/project1.png" alt="Project 1" />
              <h3>Project 1</h3>
              <p>Project description. Technologies: HTML, CSS, JS.</p>
              <a href="#" className="btn">View project</a>
            </div>

            <div className="project-card">
              <img src="/images/project2.png" alt="Project 2" />
              <h3>Project 2</h3>
              <p>Project description. Technologies: React, CSS.</p>
              <a href="#" className="btn">View project</a>
            </div>

            <div className="project-card">
              <img src="/images/project3.png" alt="Project 3" />
              <h3>Project 3</h3>
              <p>Project description. Technologies: React, CSS.</p>
              <a href="#" className="btn">View project</a>
            </div>

            <div className="project-card">
              <img src="/images/project4.png" alt="Project 4" />
              <h3>Project 4</h3>
              <p>Project description. Technologies: React, CSS.</p>
              <a href="#" className="btn">View project</a>
            </div>

            <div className="project-card">
              <img src="/images/project5.png" alt="Project 5" />
              <h3>Project 5</h3>
              <p>Project description. Technologies: React, CSS.</p>
              <a href="#" className="btn">View project</a>
            </div>

            <div className="project-card">
              <img src="/images/project6.png" alt="Project 6" />
              <h3>Project 6</h3>
              <p>Project description. Technologies: React, CSS.</p>
              <a href="#" className="btn">View project</a>
            </div>

          </div>
        </section>
      </main>

      <style jsx>{`
        header {
          background: #fff;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
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

        .nav-links a {
          text-decoration: none;
          color: #333;
          transition: 0.3s;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #4da6ff;
        }

        .projects-section {
          max-width: 1200px;
          margin: 3rem auto;
          padding: 2rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: #fff;
          padding: 1rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          text-align: center;
          transition: 0.3s;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 18px rgba(0,0,0,0.15);
        }

        .project-card img {
          width: 100%;
          border-radius: 10px;
        }

        .btn {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.6rem 1.2rem;
          background: #4da6ff;
          color: white;
          border-radius: 8px;
          text-decoration: none;
        }

        .btn:hover {
          background: #1c8be0;
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
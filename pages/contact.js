import Header from "../components/Header";
export default function Contact() {
  return (
    <>
      <head>
        <title>Contact | My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <header>
        <nav>
          <div className="logo">MyName</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a className="active">Contact</a></li>
          </ul>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <main>
        <section className="contact-section">
          <h1>Contact Me</h1>

          <div id="form-message">Message sent successfully!</div>

          <form
            className="contact-form"
            id="contactForm"
            action="https://formspree.io/f/mvgylzyz"
            method="POST"
            encType="multipart/form-data"
          >
            <label>
              Your Email:
              <input type="email" name="email" required />
            </label>

            <label>
              Message:
              <textarea name="message" rows="5" required></textarea>
            </label>

            <label>
              Attach File:
              <input type="file" name="upload" multiple />
            </label>

            <button type="submit">Send</button>
          </form>

          <div className="social-links">
            <h2>My Social Networks</h2>
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">GitHub</a>
            <a href="#" target="_blank">Telegram</a>
          </div>
        </section>
      </main>

      <style jsx>{`
        body {
          margin: 0;
          font-family: 'Arial', sans-serif;
          background-color: #f5f7fa;
          color: #333;
        }
        header {
          background-color: #fff;
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
        .nav-links li a {
          text-decoration: none;
          color: #333;
          transition: color 0.3s;
        }
        .nav-links li a:hover, .nav-links li a.active {
          color: #4da6ff;
        }
        .contact-section {
          max-width: 900px;
          margin: 4rem auto;
          padding: 2rem;
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          animation: fadeIn 1s ease;
        }
        .contact-section h1 {
          color:#93bee9;
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2.5rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form label {
          display: flex;
          flex-direction: column;
          font-weight: bold;
          font-size: 0.9rem;
        }
        .contact-form input, .contact-form textarea {
          padding: 0.7rem 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          margin-top: 0.3rem;
        }
        .contact-form button {
          width: 150px;
          padding: 0.7rem;
          background-color: #93bee9;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
        #form-message {
          display: none;
          color: green;
          margin-bottom: 1rem;
          text-align: center;
          font-weight: bold;
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          const hamburger = document.querySelector('.hamburger');
          const navLinks = document.querySelector('.nav-links');
          hamburger?.addEventListener('click', () => {
            navLinks.classList.toggle('active');
          });

          const form = document.getElementById('contactForm');
          const messageDiv = document.getElementById('form-message');
          form?.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            fetch(form.action, {
              method: 'POST',
              body: formData,
              headers: { 'Accept': 'application/json' }
            })
            .then(response => {
              if (response.ok) {
                messageDiv.style.display = 'block';
                form.reset();
              } else {
                alert('Error sending message.');
              }
            })
          });
        `
      }} />
    </>
  );
}
import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [formMessage, setFormMessage] = useState("");
  const [menuActive, setMenuActive] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/xyzvaqbe", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" },
    });

    if (res.ok) {
      setFormMessage("Message sent successfully!");
      setShowMessage(true);
      e.target.reset();
      // Скрыть сообщение через 3 секунды
      setTimeout(() => setShowMessage(false), 3000);
    } else {
      setFormMessage("Error sending message. Please try again.");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header>
        <nav>
          <div className="logo">MyName</div>
          <ul className={`nav-links ${menuActive ? "active" : ""}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a className="active">Contact</a></li>
          </ul>
          <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <main>
        <section className="contact-section">
          <h1>Contact Me</h1>
          <div className={`form-message ${showMessage ? "visible" : ""}`}>
            {formMessage}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Your Email:
              <input type="email" name="email" required />
            </label>

            <label>
              Message:
              <textarea name="message" rows="5" required></textarea>
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
        .nav-links li a:hover,
        .nav-links li a.active {
          color: #4da6ff;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }
        .hamburger span {
          width: 25px;
          height: 3px;
          background-color: #333;
          border-radius: 2px;
        }
        .nav-links.active {
          display: flex;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 70px;
            right: 0;
            background: #fff;
            flex-direction: column;
            width: 200px;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          }
          .hamburger {
            display: flex;
          }
        }
        .contact-section {
          max-width: 900px;
          margin: 4rem auto;
          padding: 2rem;
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
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
        .contact-form input,
        .contact-form textarea {
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
        .form-message {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          text-align: center;
          color: green;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .form-message.visible {
          opacity: 1;
        }
      `}</style>
    </>
  );
}

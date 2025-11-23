import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const linkStyle = (path) => ({
    textDecoration: "none",
    color: router.pathname === path ? "#4da6ff" : "#333",
    fontWeight: router.pathname === path ? "bold" : "normal",
    transition: "0.3s",
  });

  return (
    <header style={{ backgroundColor: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#4da6ff" }}>Ruslana</div>

        <ul style={{ listStyle: "none", display: "flex", gap: "1.5rem" }}>
          <li><a href="/" style={linkStyle("/")}>Home</a></li>
          <li><a href="/about" style={linkStyle("/about")}>About me</a></li>
          <li><a href="/projects" style={linkStyle("/projects")}>Projects</a></li>
          <li><a href="/contact" style={linkStyle("/contact")}>Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
}

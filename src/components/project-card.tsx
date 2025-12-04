const cardColors = {
  blue: "var(--color-blue)",
  green: "var(--color-green)",
  red: "var(--color-red)",
  yellow: "var(--color-yellow)",
};

export default function ProjectCard({ title, year, appName, color, icon }) {
  return (
    <article
      style={{
        backgroundColor: cardColors[color] || "white",
        border: "var(--border)",
        boxShadow: "var(--shadow)",
        padding: "2rem",
      }}
    >
      <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{icon}</div>
      <h3 style={{ fontSize: "1.5rem" }}>{title}</h3>

      <div
        style={{
          marginTop: "auto",
          fontFamily: "IBM Plex Mono",
          fontWeight: "700",
        }}
      >
        {appName} - {year}
      </div>
    </article>
  );
}

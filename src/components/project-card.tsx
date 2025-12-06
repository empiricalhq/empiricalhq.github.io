interface CardProps {
  title: string;
  year: string;
  appName: string;
  color: "blue" | "green" | "red" | "yellow" | "white";
  icon: string;
}

const cardColors = {
  blue: "var(--color-blue)",
  green: "var(--color-green)",
  red: "var(--color-red)",
  yellow: "var(--color-yellow)",
  white: "var(--color-white)",
};

export default function ProjectCard({
  title,
  year,
  appName,
  color,
  icon,
}: CardProps) {
  const style = {
    backgroundColor: cardColors[color] || "white",
  };

  return (
    <article style={style} className="project-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>

      <div className="card-meta">
        {appName} - {year}
      </div>
    </article>
  );
}

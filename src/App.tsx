import ProjectCard from "./components/project-card";
import SocialLink from "./components/social-link";

function App() {
  return (
    <div>
      <div className="container">
        <div className="intro">
          <h1>
            At Pragmatic, we make software that works. We believe that software
            should be reliable, efficient, and easy to use.
          </h1>
          <div style={{ marginTop: ".75rem" }}>
            <SocialLink href="https://github.com/empiricalhq/">
              GITHUB
            </SocialLink>
          </div>
        </div>

        <div className="projects-grid">
          <div>
            <ProjectCard
              color="blue"
              icon="🥀"
              title="Gaaaaa aaaaaaa"
              appName="WhatsApp Bot"
              year="2025"
            />
            <ProjectCard
              color="white"
              icon="🕊️"
              title="A monorepo"
              appName="Lima Limpia"
              year="2025"
            />
            <ProjectCard
              color="yellow"
              icon="☠️"
              title="A monorepo"
              appName="Lima Limpia"
              year="2025"
            />
            <ProjectCard
              color="red"
              icon="😭"
              title="A simple app to download files"
              appName="downloader"
              year="2025"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

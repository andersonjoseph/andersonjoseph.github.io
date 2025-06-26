import { CodeHighlight } from "@mantine/code-highlight";

export function Skills() {
  return (
    <CodeHighlight
      code={skillsCode}
      language="json"
      radius="sm"
      withCopyButton={false}
    />
  );
}

const skillsCode = `{
  "languages": [
    "Go",
    "TypeScript",
    "JavaScript (Node)",
    "HTML",
    "SQL"
  ],
  "frameworks": [
    "React",
    "Remix"
  ],
  "databases": [
    "PostgreSQL",
    "MongoDB",
    "ElasticSearch",
    "Redis"
  ],
  "tools": [
    "Neovim",
    "Git",
    "Docker",
    "Grafana",
    "Prometheus",
    "Bash"
  ],
  "learning": true
}`;

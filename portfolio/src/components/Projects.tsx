import { Text, Group, Stack, Image, Anchor } from "@mantine/core";
import drill from "../../assets/drill.png";
import hashids from "../../assets/hashids.png";
import shotbit from "../../assets/shotbit.png";
import soundgo from "../../assets/soundgo.png";
import sqidsencoder from "../../assets/sqidsencoder.png";

type ProjectItemProps = {
  title: string;
  summary: string;
  href: string;
  image: string;
};

function ProjectItem({ title, summary, href, image }: ProjectItemProps) {
  return (
    <Group wrap="nowrap" gap="md" align="center">
      <Image h="50px" w="50px" src={image} radius="md" height="100%" />
      <div>
        <Anchor
          href={href}
          target="_blank"
          variant="text"
          underline="always"
          c="gray"
        >
          <Text size="sm" fw={500}>
            {title}
          </Text>
        </Anchor>
        <Text size="xs" c="dimmed">
          {summary}
        </Text>
      </div>
    </Group>
  );
}

const projects: ProjectItemProps[] = [
  {
    title: "shotbit",
    summary:
      "A NodeJS tool that allows you to extract movie scenes/shots easily.",
    href: "https://github.com/andersonjoseph/shotbit",
    image: shotbit,
  },
  {
    title: "drill",
    summary:
      "A terminal-based debugger for Golang, designed to provide a lightweight and simple debugging experience.",
    href: "https://github.com/andersonjoseph/drill",
    image: drill,
  },
  {
    title: "soundgo",
    summary: "A REST API for a simple audio hosting service.",
    href: "https://github.com/andersonjoseph/soundgo",
    image: soundgo,
  },
  {
    title: "fastify-hashids",
    summary:
      "A Fastify plugin for integrating Hashids into your routes, providing an easy way to encode and decode data.",
    href: "https://www.npmjs.com/package/fastify-hashids",
    image: hashids,
  },
  {
    title: "sqidsencoder",
    summary:
      "A Go library that provides functionality to encode and decode structs using sqids.",
    href: "https://github.com/andersonjoseph/sqidsencoder",
    image: sqidsencoder,
  },
];

export function Projects() {
  return (
    <Stack>
      {projects.map((item, index) => (
        <ProjectItem key={index} {...item} />
      ))}
    </Stack>
  );
}

import { Group, Stack, Text } from "@mantine/core";

type ExperienceItemProps = {
  company: string;
  title: string;
  location: string;
  description: string;
};

export function ExperienceItem({
  title,
  company,
  location,
  description,
}: ExperienceItemProps) {
  return (
    <Stack gap="xs">
      <Group justify="space-between" align="flex-start">
        <Stack gap={0}>
          <Text size="sm" fw={500}>
            {company}
          </Text>
          <Text size="xs" c="dimmed">
            {title}
          </Text>
        </Stack>
        <Text size="xs" c="dimmed">
          {location}
        </Text>
      </Group>
      <Text size="xs" c="dimmed">
        {description}
      </Text>
    </Stack>
  );
}

const experienceItems: ExperienceItemProps[] = [
  {
    company: "Outlier.ai",
    title: "AI Trainer - Software Engineering",
    location: "Remote",
    description:
      "Trained an AI assistant on complex software engineering tasks in Go, TypeScript, Python, and SQL. Leveraged RLHF to enhance AI's code generation, debugging, and problem-solving, ensuring high-quality outputs aligned with industry standards.",
  },
  {
    company: "VisitorEdge",
    title: "Principal Backend Engineer",
    location: "Arizona - US (Remote)",
    description:
      "Engineered a high-performance REST API with advanced database scaling and server optimization to handle high traffic. Developed comprehensive documentation and custom automation tools for deployments and releases, streamlining operations.",
  },
  {
    company: "Phase One Ventures",
    title: "Lead Backend Developer",
    location: "Arizona - US (Remote)",
    description:
      "Boosted API performance by 300% through refactoring and implemented monitoring systems. Promoted to lead backend developer, overseeing a team of 4, designing robust architectures, and conducting thorough code reviews.",
  },
  {
    company: "NeoAttack",
    title: "Full Stack Developer",
    location: "Madrid - Spain (Remote)",
    description:
      "Built a student residence search platform and image marketplace from the ground up. Authored detailed REST API documentation that enhanced team productivity and enabled efficient, independent development.",
  },
];

export function Experience() {
  return (
    <Stack gap="lg">
      {experienceItems.map((item, index) => (
        <ExperienceItem key={index} {...item} />
      ))}
    </Stack>
  );
}

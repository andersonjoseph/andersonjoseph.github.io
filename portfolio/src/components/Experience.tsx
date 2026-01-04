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
    title: "Software Engineer",
    location: "Remote",
    description:
      "Built internal tools to improve code navigation accuracy across 50+ repositories. Participated in RLHF workflows to enhance AI's code generation capabilities and engineered Docker-based execution pipelines standardizing development environments.",
  },
  {
    company: "Phase One Ventures",
    title: "Lead Backend Developer",
    location: "Arizona - US (Remote)",
    description:
      "Promoted to lead after delivering high-impact features, leading a team of 4 developers across VisitorEdge and other 3 products. Established monitoring dashboards and comprehensive documentation standards, improving issue detection and onboarding efficiency.",
  },
  {
    company: "NeoAttack",
    title: "Full Stack Engineer",
    location: "Madrid - Spain (Remote)",
    description:
      "Delivered 2 production-ready applications serving 5,000+ monthly active users using ReactJS, NodeJS, and PostgreSQL. Engineered REST API endpoints with OpenAPI documentation and implemented automated testing and deployment workflows using CircleCI and Docker.",
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

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
      "Trained an AI assistant by providing expert-level human feedback on real-world software engineering tasks, focusing on Go, TypeScript, Python, and SQL. I participated in Reinforcement Learning from Human Feedback (RLHF) workflows to iteratively improve the AI's code generation, debugging, and problem-solving capabilities, while also evaluating and correcting AI-generated code to ensure accuracy and alignment with industry best practices.",
  },
  {
    company: "VisitorEdge",
    title: "Principal Backend Engineer",
    location: "Arizona - US (Remote)",
    description:
      "Developed a high-performance REST API architecture, incorporating database scaling and server optimization to ensure best performance under high traffic. I created extensive documentation covering the API architecture, data models, and caching mechanisms to facilitate smooth onboarding and future maintenance, and developed a suite of custom tools to automate repetitive tasks like deployments and releases.",
  },
  {
    company: "Phase One Ventures",
    title: "Lead Backend Developer",
    location: "Arizona - US (Remote)",
    description:
      "Initially, I optimized an existing API, boosting its performance by 300% through code refactoring and introduced monitoring systems for optimal performance. Following a promotion, I led the creation of a robust system architecture, managed a backend team of 4 developers, conducted code reviews, and demonstrated strong leadership and communication skills with team members and stakeholders.",
  },
  {
    company: "NeoAttack",
    title: "Full Stack Developer",
    location: "Madrid - Spain (Remote)",
    description:
      "I played a key role in building both a student residence search platform and an image marketplace, authoring comprehensive, user-friendly REST API documentation that streamlined onboarding, boosted team productivity, and enabled ongoing development with minimal guidance.",
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

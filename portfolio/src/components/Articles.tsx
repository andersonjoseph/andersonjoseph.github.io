import { Anchor, Group, Stack, Text } from "@mantine/core";

type ArticleItemProps = {
  title: string;
  summary: string;
  href: string;
};

function ArticleItem({ title, summary, href }: ArticleItemProps) {
  return (
    <Group wrap="nowrap" gap="md" align="flex-start">
      <div>
        <Anchor
          c="gray"
          href={href}
          target="_blank"
          variant="text"
          underline="always"
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

const articles: ArticleItemProps[] = [
  {
    title: "Understanding highWaterMark in Node.js Streams",
    summary:
      "Node.js streams are a powerful tool for handling I/O operations, but they can be tricky to get right. One of the most important concepts to understand is the highWaterMark.",
    href: "https://dev.to/andersonjoseph/understanding-highwatermark-in-nodejs-streams-4fmb",
  },
  {
    title: "NestJS: Creating a pipe to optimize uploaded images",
    summary:
      "In this article, we'll explore how to create a custom pipe in NestJS to optimize images.",
    href: "https://dev.to/andersonjoseph/nestjs-creating-a-pipe-to-optimize-uploaded-images-5b3h",
  },
  {
    title: "Don't marry the framework!",
    summary:
      "Frameworks are great, but they should be treated as a tool, not a religion.",
    href: "https://dev.to/andersonjoseph/don-t-marry-the-framework-5h63",
  },
  {
    title: "Security & HTTP Headers",
    summary:
      "In this article, we'll take a look at some of the most important security-related HTTP headers and how they can help you secure your web applications.",
    href: "https://dev.to/andersonjoseph/security--htpp-headers-30c6",
  },
  {
    title: "filename, dirname, and others are not really globals.",
    summary:
      "In Node.js, you might be used to using variables like __filename and __dirname, but did you know that they're not actually global variables?",
    href: "https://dev.to/andersonjoseph/filename-dirname-and-others-are-not-really-globals-4jpp",
  },
];

export function Articles() {
  return (
    <Stack>
      {articles.map((item, index) => (
        <ArticleItem key={index} {...item} />
      ))}
    </Stack>
  );
}

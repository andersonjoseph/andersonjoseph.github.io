import {
  Anchor,
  Burger,
  Group,
  Stack,
  Title,
  Text,
  Flex,
  Box,
  Divider,
  Grid,
  Card,
  ScrollArea,
  SimpleGrid,
  Badge,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { TimezoneClock } from "./components/Clock";
import { Experience } from "./components/Experience";
import { Articles } from "./components/Articles";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box>
      <Flex align="center">
        <Group
          gap={5}
          visibleFrom="xs"
          justify="space-between"
          w="100%"
          align="center"
        >
          <Stack gap={0}>
            <Title order={1} size="sm" m={0}>
              Anderson Joseph
            </Title>
            <Text size="xs" c="dimmed">
              Software Developer
            </Text>
          </Stack>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Flex>

      <Divider mt="md" mb="xl" />
    </Box>
  );
}

interface CustomCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  height?:
    | string
    | {
        base?: string;
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      };
}

function CustomCard({ title, subtitle, children, height }: CustomCardProps) {
  height = height ?? "auto";

  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Group justify="space-between">
        <Text size="xs" fw={500}>
          {title}
        </Text>
        <Text size="xs" c="dimmed">
          {subtitle}
        </Text>
      </Group>
      <Divider my="xs" />
      <ScrollArea offsetScrollbars type="always" h={height} scrollbars="y">
        {children}
      </ScrollArea>
    </Card>
  );
}

type ReachOutLinkProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

function ReachOutLink({ icon, label, href }: ReachOutLinkProps) {
  return (
    <Anchor
      href={href}
      target="_blank"
      variant="text"
      c="white"
      underline="hover"
      size="sm"
    >
      <Group gap="xs">
        {icon}
        {label}
      </Group>
    </Anchor>
  );
}

function Main() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 4 }}>
        <Stack>
          <CustomCard title="EXPERIENCE" height={{ base: "auto", md: "50vh" }}>
            <Experience />
          </CustomCard>

          <CustomCard title="MY INTERESTS">
            <SimpleGrid cols={2} spacing="md">
              <Badge variant="outline" size="sm" color="blue">
                Backend Development
              </Badge>
              <Badge variant="outline" size="sm" color="gray">
                Linux
              </Badge>
              <Badge variant="outline" size="sm" color="orange">
                Open Source
              </Badge>
              <Badge variant="outline" size="sm" color="green">
                Performance
              </Badge>
              <Badge variant="outline" size="sm" color="grape">
                Data-Driven Apps
              </Badge>
              <Badge variant="outline" size="sm" color="cyan">
                API's
              </Badge>
              <Badge variant="outline" size="sm" color="#57A143">
                Neovim (btw)
              </Badge>
            </SimpleGrid>
          </CustomCard>
        </Stack>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }}>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <CustomCard
              title="TIMEZONE"
              subtitle="GMT-4"
              height={{ base: "auto", md: "15vh" }}
            >
              <TimezoneClock />
            </CustomCard>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6 }}>
            <CustomCard
              title="MODE"
              subtitle="Hacking"
              height={{ base: "auto", md: "15vh" }}
            >
              <Text size="xs">
                In a state of flow, training AI models to assist software
                engineers.
              </Text>
            </CustomCard>
          </Grid.Col>

          <Grid.Col span={12}>
            <CustomCard title="SKILLS" height={{ base: "auto", md: "31.2vh" }}>
              <Skills />
            </CustomCard>
          </Grid.Col>

          <Grid.Col span={12}>
            <CustomCard title="REACH OUT">
              <Stack>
                <ReachOutLink
                  icon={<IconMail size={18} />}
                  label="andersonjoseph@mailfence.com"
                  href="mailto:andersonjoseph@mailfence.com"
                />
                <ReachOutLink
                  icon={<IconBrandX size={18} />}
                  label="@ampersandjoseph"
                  href="https://x.com/ampersandjoseph"
                />
                <ReachOutLink
                  icon={<IconBrandGithub size={18} />}
                  label="andersonjoseph"
                  href="https://github.com/andersonjoseph"
                />
                <ReachOutLink
                  icon={<IconBrandDiscord size={18} />}
                  label="anderjoseph"
                  href="https://discordapp.com/users/anderjoseph"
                />
              </Stack>
            </CustomCard>
          </Grid.Col>
        </Grid>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }}>
        <Stack>
          <CustomCard title="PROJECTS" height={{ base: "auto", md: "30vh" }}>
            <Projects />
          </CustomCard>

          <CustomCard title="ARTICLES" height={{ base: "auto", md: "35vh" }}>
            <Articles />
          </CustomCard>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default function App() {
  return (
    <Box mx={{ base: "md", lg: "xl", xl: "15em" }} mt="md">
      <Header />
      <Main />
    </Box>
  );
}

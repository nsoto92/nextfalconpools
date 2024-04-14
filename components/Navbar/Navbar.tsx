'use client';

import {
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandYoutube,
  IconChevronDown,
  IconDroplet,
  // IconSalt,
} from '@tabler/icons-react';
import styles from './Navbar.module.css';

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [socialLinksOpened, { toggle: toggleSocialLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const CalculatorData = [
    {
      icon: IconDroplet,
      href: '/calculators/gallon',
      title: 'Calculadora de Galones',
      description: 'Calcula galones para piscinas rectangulares, circulares e irregulares',
    },
    // {
    //   icon: IconSalt,
    //   title: 'Calculadora de Sal',
    //   description: 'Calcula la cantidad de sal que necesitas para tu piscina de agua salada',
    // },
];

const SocialMediaData = [
  {
    icon: IconBrandFacebook,
    title: 'Facebook',
    onClick: 'https://facebook.com/falconpoolspr',
  },
  {
    icon: IconBrandTiktok,
    title: 'Tik Tok',
    onClick: 'https://www.tiktok.com/@falconpoolspr',
  },
  {
    icon: IconBrandInstagram,
    title: 'Instagram',
    onClick: 'https://www.instagram.com/falconpoolspr',
  },
  {
    icon: IconBrandYoutube,
    title: 'YouTube',
    onClick: 'https://www.youtube.com/@falconpoolspr',
  },
  {
    icon: IconBrandTwitter,
    title: 'Twitter',
    onClick: 'https://twitter.com/falconpoolspr?lang=en',
  },
];

  const links = CalculatorData.map((item) => (
    <UnstyledButton component="a" href={item.href} className={styles.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md" classNames={{ root: styles.menuIcon }}>
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const socialLinks = SocialMediaData.map((item) => (
    <UnstyledButton
      component="a"
      href={item.onClick}
      target="_blank"
      className={styles.subLink}
      key={item.title}
    >
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md" classNames={{ root: styles.menuIcon }}>
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text mt={5} size="sm" fw={500}>
            {item.title}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <>
      <Box>
        <header className={styles.header}>
          <Group justify="space-between" h="100%">
            <a href="/">
              <Image
                h={55}
                src="/fpLogo.svg"
                alt="Falcon Pools Nav Logo"
              />
            </a>
            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="/" className={styles.link}>
                Home
              </a>
              {/* After MVP */}
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={styles.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Calculadoras
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.orange[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Calculadoras</Text>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={styles.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Social Media
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.orange[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Social Media</Text>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {socialLinks}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
            <a href="#" className={styles.link}>
              Home
            </a>
            {/* After MVP :( */}
            <UnstyledButton className={styles.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Calculadoras
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.orange[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <UnstyledButton className={styles.link} onClick={toggleSocialLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Social Media
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.orange[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={socialLinksOpened}>{socialLinks}</Collapse>
          </ScrollArea>
        </Drawer>
      </Box>
    </>
  );
}

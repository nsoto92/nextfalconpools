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
  Modal,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronDown,
  IconSalt,
  IconDroplet,
  // IconCurrencyDollar,
} from '@tabler/icons-react';
import styles from './Navbar.module.css';
import { GallonCalculator } from '../Calculators/GallonCalculator';

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [gallonCalcOpened, { open: openGallonCalc, close: closeGallonCalc }] = useDisclosure(false);
  const theme = useMantineTheme();

  const CalculatorData = [
    {
      icon: IconDroplet,
      title: 'Calculadora de Galones',
      onClick: openGallonCalc,
      description: 'Calcula galones para piscinas rectangulares, circulares e irregulares',
    },
    {
      icon: IconSalt,
      title: 'Calculadora de Sal',
      description: 'Calcula la cantidad de sal que necesitas para tu piscina de agua salada',
    },
    // Will be refined in the future, not part of MVP.
  // {
  //   icon: IconCurrencyDollar,
  //   title: 'Calculadora de Costo',
  //   description: 'Calcula un precio estimado para tu piscina',
  // },
];

  const links = CalculatorData.map((item) => (
    <UnstyledButton onClick={item.onClick} className={styles.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
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

  return (
    <>
      <Box>
        <header className={styles.header}>
          <Group justify="space-between" h="100%">
            <Image
              h={55}
              src="/fpLogo.svg"
            />
            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="/" className={styles.link}>
                Home
              </a>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={styles.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Calculadoras
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
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
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened && !gallonCalcOpened}
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
            <UnstyledButton className={styles.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Calculadoras
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
          </ScrollArea>
        </Drawer>
      </Box>
      <Modal
        className={styles.modal}
        opened={gallonCalcOpened}
        onClose={closeGallonCalc}
        size="xl"
      >
       <GallonCalculator />
      </Modal>
    </>
  );
}

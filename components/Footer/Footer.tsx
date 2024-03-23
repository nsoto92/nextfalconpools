import { Container, Group, ActionIcon, rem, Image } from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.inner}>
        <Image
          className={styles.logo}
          h={30}
          src="/fpLogo.svg"
        />
        <Group gap={0} className={styles.links} justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            component="a"
            color="gray"
            variant="subtle"
            href="https://facebook.com/falconpoolspr"
            target="_blank"
          >
            <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            color="gray"
            variant="subtle"
            href="https://www.tiktok.com/@falconpoolspr/"
            target="_blank"
          >
            <IconBrandTiktok style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            color="gray"
            variant="subtle"
            href="https://www.instagram.com/falconpoolspr/"
            target="_blank"
          >
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            color="gray"
            variant="subtle"
            href="https://www.youtube.com/@falconpoolspr"
            target="_blank"
          >
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            color="gray"
            variant="subtle"
            href="https://twitter.com/falconpoolspr?lang=en"
            target="_blank"
          >
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

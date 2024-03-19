'use client';

import Script from 'next/script';
import { Button, Container, Modal, Title, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styles from './HomeHero.module.css';

export function HomeHero() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className={styles.root}>
      <Container size="lg">
        <div className={styles.inner}>
          <div className={styles.content}>
            <Title className={styles.title}>
              Especialistas en{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                construcción
              </Text>{' '}
              y{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'orange' }}
              >
                remodelación
              </Text>{' '}
              de piscinas
            </Title>

            <Text className={styles.description} mt={30}>
              Desde el diseño hasta la instalación, nuestro equipo capacitado aporta años de
              experiencia y un compromiso con la excelencia. Ya sea que sueñes con una lujosa
              piscina personalizada, renovaciones refrescantes o reparaciones confiables, somos
              tu compañía de piscinas de confianza.
            </Text>
            <Button
              onClick={open}
              variant="gradient"
              gradient={{ from: 'pink', to: 'orange' }}
              size="md"
              className={styles.control}
              mt={40}
            >
              Citas Aquí
            </Button>
          </div>
        </div>
      </Container>
      <Modal opened={opened} onClose={close} size="xl">
        <iframe
          title="scheduler"
          className={styles.schedulerFrame}
          src="https://falconpoolsprhablaclaro.acuityscheduling.com"
          width="100%"
          height="800"
        />
        <Script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        />
      </Modal>
    </div>
  );
}

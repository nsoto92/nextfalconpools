import { Button, Container, Title, Text } from '@mantine/core';
import styles from './HomeHero.module.css';

export function HomeHero() {
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
              component="a"
              variant="gradient"
              gradient={{ from: 'pink', to: 'orange' }}
              size="md"
              className={styles.control}
              mt={40}
              href="https://falconpoolsprhablaclaro.as.me/schedule/9586f425"
              target="_blank"
            >
              Citas Aquí
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

'use client';

import { Card, Container, rem, Tabs, Text, Title } from '@mantine/core';
import { IconRectangle, IconBrandPeanut, IconCircle } from '@tabler/icons-react';
import styles from './GallonCalculator.module.css';
import { RectangularCalculator } from './Pools/RectangularCalculator';
import { CircularCalculator } from './Pools/CircularCalculator';
import { IrregularCalculator } from './Pools/IrregularCalculator';

export function GallonCalculator() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <div className={styles.root}>
      <Container className={styles.wrapper}>
        <Title className={styles.title}>Calculadora de Galones</Title>
        <Container size={900} p={0}>
          <Text size="sm" className={styles.description}>
          ¿Deseas saber cuantos galones tiene tu piscina? ¡Utiliza nuestra Calculadora de Galones!
          Simplemente ingrese la información de su piscina para obtener un estimado del volumen de
          agua en galones. Nuestra calculadora le ayudará a planificar el mantenimiento y el llenado
          de su piscina de manera eficiente.
          </Text>
        </Container>
        <Card
          shadow="sm"
          radius="lg"
        >
          <Tabs
            color="orange"
            variant="pills"
            radius="xl"
            defaultValue="first"
          >
            <Tabs.List justify="center">
              <Tabs.Tab
                value="first"
                leftSection={<IconRectangle style={iconStyle} />}
              >
                Piscina Rectangular
              </Tabs.Tab>
              <Tabs.Tab
                value="second"
                leftSection={<IconBrandPeanut style={iconStyle} />}
              >
                Piscina Irregular
              </Tabs.Tab>
              <Tabs.Tab
                value="third"
                leftSection={<IconCircle style={iconStyle} />}
              >
                Piscina Circular
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="first">
              <RectangularCalculator />
            </Tabs.Panel>
            <Tabs.Panel value="second">
              <IrregularCalculator />
            </Tabs.Panel>
            <Tabs.Panel value="third">
              <CircularCalculator />
            </Tabs.Panel>
          </Tabs>
        </Card>
      </Container>
    </div>
  );
}

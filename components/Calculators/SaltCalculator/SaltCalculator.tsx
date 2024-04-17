'use client';

import { useState } from 'react';
import { Container, Title, Text, Card, Slider, rem, Grid, Paper } from '@mantine/core';
import { IconGripVertical, IconSalt } from '@tabler/icons-react';
import { calculateSaltDemand } from '@/utils/Calculators';
import styles from '../Calculator.module.css';

export function SaltCalculator() {
  const [volume, setVolume] = useState<number>(5000);
  const [saltLevel, setSaltLevel] = useState<number>(0);
  const requiredSalt = calculateSaltDemand(volume, saltLevel);

  return (
    <div className={styles.rootSalt}>
      <Container className={styles.wrapper}>
        <Title className={styles.title}>Calculadora de Salinidad</Title>
        <Container size={900} p={0}>
          <Text size="sm" className={styles.description}>
            Optimiza el equilibrio perfecto de sal en tu piscina con nuestra Calculadora de
            Salinidad para Piscinas. Con esta herramienta, puedes calcular fácilmente la cantidad
            precisa de sal necesaria para mantener el nivel ideal en tu agua de piscina. Simplemente
            ingresa el {' '}
            <Text component="span" fw={700}>
              volumen de tu piscina en galones
            </Text>{' '}
            , junto con {' '}
            <Text component="span" fw={700}>
              el nivel objetivo de salinidad en partes por millón (ppm)
            </Text>{' '}
            , y obtén al instante la cantidad exacta de sal requerida.
          </Text>
        </Container>
        <Card
          shadow="sm"
          radius="lg"
          padding="xl"
        >
          <Grid gutter="xl">
            <Grid.Col span={9}>
              <Text mt={15} ml={15} size="xl" fw={600}>Volumen de Piscina</Text>
              <div className={styles.sliderValue}>
                <Text fs="italic" size="l" mr={15}>{`${volume} galones`}</Text>
              </div>
              <Slider
                mb="xl"
                p={15}
                value={volume}
                onChange={setVolume}
                defaultValue={5000}
                min={5000}
                max={40000}
                thumbSize={30}
                color="orange"
                thumbChildren={
                  <IconGripVertical style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                }
                marks={[
                  { value: 5000, label: '5,000' },
                  { value: 13750 },
                  { value: 22500, label: '22,500' },
                  { value: 31250 },
                  { value: 40000, label: '40,000' },
                ]}
              />
              <Text mt={15} ml={15} size="xl" fw={600}>Nivel de Salinidad de Piscina</Text>
              <div className={styles.sliderValue}>
                <Text fs="italic" size="l" mr={15}>{`${saltLevel} ppm`}</Text>
              </div>
              <Slider
                mb="xl"
                p={15}
                value={saltLevel}
                onChange={setSaltLevel}
                defaultValue={0}
                min={0}
                max={3600}
                thumbSize={30}
                color="orange"
                thumbChildren={
                  <IconGripVertical style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                }
                marks={[
                  { value: 0, label: '0' },
                  { value: 900 },
                  { value: 1800, label: '1,800' },
                  { value: 2700 },
                  { value: 3600, label: '3,600' },
                ]}
              />
            </Grid.Col>
            <Grid.Col span="auto">
              <Paper radius="lg" p="xl" className={styles.volumeWrapper}>
                <IconSalt
                  style={{ width: rem(32), height: rem(32) }}
                  className={styles.icon}
                  stroke={1.5}
                />
                <Text className={styles.label}>Demanda Actual de Salitre: </Text>
                <Text size="xl" fw={700}>{requiredSalt} </Text>
                <Text fz="xs" className={styles.count}>LBS</Text>
              </Paper>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}

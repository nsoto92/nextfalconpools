import { useState } from 'react';
import { Button, Group, Image, NumberInput, Paper, rem, SimpleGrid, Text } from '@mantine/core';
import { IconDroplet } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import styles from './Pools.module.css';
import { calculateCircularGallons } from '@/utils/Calculators';

export function CircularCalculator() {
  const [gallons, setGallons] = useState<Number>(0);
  const form = useForm({
    initialValues: {
      depth1: 0,
      depth2: 0,
      radio: 0,
    },
  });

  const handleSubmit = () => {
    const totalGallons = calculateCircularGallons(
      form.values.depth1,
      form.values.radio,
      form.values.depth2,
    );
    setGallons(totalGallons);
  };

  return (
    <div className={styles.wrapper}>
      <SimpleGrid cols={2}>
        <div>
          <Image
            radius="md"
            src="/CirclePool.png"
            height={155}
          />
          <Paper className={styles.volumeWrapper} radius="md" shadow="none" p="xs">
            <IconDroplet
              style={{ width: rem(32), height: rem(32) }}
              className={styles.icon}
              stroke={1.5}
            />
            <div>
              <Text className={styles.label}>Volumen Estimado</Text>
              <Text fz="xs" className={styles.count}>
                <span className={styles.value}> {`${gallons} galones`}</span>
              </Text>
            </div>
          </Paper>
        </div>
        <div>
          <form onSubmit={form.onSubmit(handleSubmit)}>
          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <NumberInput
            label="Lado Llano"
            hideControls
            rightSection="ft"
            rightSectionPointerEvents="none"
            {...form.getInputProps('depth1')}
          />
          <NumberInput
            label="Lado Hondo"
            hideControls
            rightSection="ft"
            rightSectionPointerEvents="none"
            {...form.getInputProps('depth2')}
          />
          <NumberInput
            label="Radio (R)"
            hideControls
            rightSection="ft"
            rightSectionPointerEvents="none"
            {...form.getInputProps('radio')}
          />
          </SimpleGrid>
          <Group justify="flex-end" mt="xl">
            <Button color="orange" type="submit" size="sm">
              Calcular
            </Button>
          </Group>
          </form>
        </div>
      </SimpleGrid>
    </div>
  );
}

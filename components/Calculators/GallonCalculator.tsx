import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Button,
  Group,
} from '@mantine/core';
import styles from './Calculators.module.css';
import { GradientSegmentedControl } from '../Selectors/GradientSegmentedControl';
import { PoolShapes } from '@/utils/Calculators';

export function GallonCalculator() {
  const shapes: PoolShapes[] = ['Rectangular', 'Circular', 'Irregular'];
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.selector}>
          <GradientSegmentedControl data={shapes} />
        </div>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={styles.title}>Calculadora de Galones</Title>
            <Text className={styles.description} mt="sm" mb={30} fw={500}>
              Utilice esta calculadora para estimar el volumen de galones de agua
              necesario para su piscina.
            </Text>
          </div>
          <div className={styles.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: styles.input, label: styles.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: styles.input, label: styles.inputLabel }}
            />

            <Group justify="flex-end" mt="md">
              <Button className={styles.control}>Send message</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    </>
  );
}

import { SegmentedControl } from '@mantine/core';
import styles from './GradientSegmentedControl.module.css';

export interface GradientSegmentedControlProps {
  data: string[];
}

export function GradientSegmentedControl({ data }: GradientSegmentedControlProps) {
  return (
    <SegmentedControl
      radius="xl"
      size="md"
      data={data}
      classNames={styles}
    />
  );
}

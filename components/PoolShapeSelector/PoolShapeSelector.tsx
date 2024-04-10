'use client';

import { UnstyledButton, Text, Image, SimpleGrid } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import styles from './PoolShapeSelector.module.css';

interface PoolShapeSelectorProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  title: string;
  description: string;
  image: string;
}

export function PoolShapeSelector({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  className,
  image,
  ...others
}: PoolShapeSelectorProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof PoolShapeSelectorProps>) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  return (
    <UnstyledButton
      {...others}
      onClick={() => handleChange(!value)}
      data-checked={value || undefined}
      className={styles.button}
    >
      <Image src={image} alt={title} width={40} height={40} />

      <div className={styles.body}>
        <Text c="dimmed" size="xs" lh={1} mb={5}>
          {description}
        </Text>
        <Text fw={500} size="sm" lh={1}>
          {title}
        </Text>
      </div>
    </UnstyledButton>
  );
}

const mockdata = [
  { description: 'Rectangular', title: 'Beach vacation', image: '/CirclePool.png' },
  { description: 'Circular', title: 'City trips', image: '/CirclePool.png' },
  { description: 'Irregular', title: 'Hiking vacation', image: '/CirclePool.png' },
];

export function PoolShapeSelectors() {
  const items = mockdata.map((item) => <PoolShapeSelector {...item} key={item.title} />);
  return <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }}>{items}</SimpleGrid>;
}

'use client';

import {
  Box,
  Text,
  Group,
} from '@mantine/core';
import { GoogleButton } from '@/components/Button/GoogleeButton';

export default function LoginPage() {
  return (
    <Box style={{
      width: '50%',
      margin: 'auto',
    }}
    >
      <Text size="lg" fw={500}>
        FalconPoolsV2 login
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton size="sm" radius="xl">Google</GoogleButton>
      </Group>
    </Box>
  );
}

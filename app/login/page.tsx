'use client';

import {
  Box,
  Text,
  Group,
} from '@mantine/core';
import { GoogleButton } from '@/components/Button/GoogleeButton';
import { UserAuth } from '@/firebase/context/AuthContext';

export default function LoginPage() {
  const { user, googleSignIn } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

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
        <GoogleButton onClick={handleSignIn} size="sm" radius="xl">Google</GoogleButton>
      </Group>
    </Box>
  );
}

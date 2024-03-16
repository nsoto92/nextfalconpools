'use client';

// import {
//   Box,
//   Text,
//   Group,
// } from '@mantine/core';
// import { GoogleButton } from '@/components/Button/GoogleButton';
// import { UserAuth } from '@/firebase/context/AuthContext';
import { notFound } from 'next/navigation';

export default function LoginPage() {
  // Not Found until Users feature is implemented
  return notFound();
  // const { googleSignIn } = UserAuth();

  // const handleSignIn = async () => {
  //   try {
  //     await googleSignIn();
  //   } catch (error) {
  //     throw new Error('Error signing in with Google');
  //   }
  // };

  // return (
  //   <Box style={{
  //     width: '50%',
  //     margin: 'auto',
  //   }}
  //   >
  //     <Text size="lg" fw={500}>
  //       FalconPoolsV2 login
  //     </Text>

  //     <Group grow mb="md" mt="md">
  //       <GoogleButton onClick={handleSignIn} size="sm" radius="xl">Google</GoogleButton>
  //     </Group>
  //   </Box>
  // );
}

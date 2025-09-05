"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Box, Button, Heading, VStack, Text } from "@chakra-ui/react";

export default function Home() {
  const { data: session } = useSession();
  const [error, setError] = useState(null);

  // Handle login with error catching
  const handleLogin = async (provider) => {
    try {
      setError(null); // Reset previous errors
      await signIn(provider, { callbackUrl: "/" });
    } catch (err) {
      setError(`Login failed: ${err.message}`);
    }
  };

  if (session) {
    return (
      <VStack spacing={4} mt={10}>
        <Heading size="md">Welcome, {session.user.name}!</Heading>
        <Button colorScheme="red" onClick={() => signOut()}>
          Logout
        </Button>
      </VStack>
    );
  }

  return (
    <VStack spacing={4} mt={10}>
      <Heading>Login</Heading>

      {error && <Box color="red.500">{error}</Box>}

      <Button colorScheme="blue" onClick={() => handleLogin("google")}>
        Login with Google
      </Button>

      <Button colorScheme="linkedin" onClick={() => handleLogin("linkedin")}>
        Login with LinkedIn
      </Button>
    </VStack>
  );
}

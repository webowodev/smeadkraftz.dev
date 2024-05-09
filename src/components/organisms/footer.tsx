"use client";

import { Stack, Text } from "@chakra-ui/react";
import SocialLinks from "../molecules/socialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Stack
      as="footer"
      alignItems={"center"}
      p={4}
      py={12}
      spacing={4}
      color={"gray.300"}
    >
      <Text>&copy; {year} Dimas Wibowo. All rights reserved</Text>
      <SocialLinks />
    </Stack>
  );
}

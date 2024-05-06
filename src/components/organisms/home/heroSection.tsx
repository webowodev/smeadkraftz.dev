"use client";

import Introduce from "@/components/molecules/introduce";
import { Box, Button, Stack } from "@chakra-ui/react";
import HelloSection from "./helloSection";
import { Link } from "@chakra-ui/next-js";
import Transition from "@/components/atoms/transition";

export default function HeroSection() {
  return (
    <Stack
      as={"section"}
      minW={{ base: "100%", md: "70%", lg: "50%" }}
      spacing={6}
    >
      {/* Start hello */}
      <Transition>
        <Introduce />
      </Transition>
      <Transition delay={0.2}>
        <HelloSection />
      </Transition>
      {/* End hello */}
      <Transition delay={0.4}>
        <Box textAlign={"center"}>
          <Button as={Link} href={"/about"} size={"lg"} variant={"outline"}>
            Know More
          </Button>
        </Box>
      </Transition>
    </Stack>
  );
}

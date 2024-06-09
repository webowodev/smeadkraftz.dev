"use client";

import OnScreenTransition from "@/components/atoms/onScreenTransition";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  Hide,
  Show,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";

export default function LetUsTalkBanner() {
  const contact = (
    <Stack
      id={"let-us-talk-banner"}
      color={"black"}
      textAlign={{ base: "center", sm: "left" }}
      spacing={4}
    >
      <OnScreenTransition delay={0.3} offscreen={{ x: 20, opacity: 0 }}>
        <Stack spacing={4}>
          <Heading fontSize={"2xl"} fontWeight={"normal"}>
            Have an ideas in your head?
          </Heading>
          <Stack direction={"row"}>
            <Box w={"full"} textAlign={{ base: "center", sm: "left" }}>
              <Button
                as={Link}
                href="mailto:dimas@webowo.dev?subject=I have an idea: Your Idea&body=Hi Dimas,%0D%0A%0D%0AI hope this message finds you well. I am reaching out because I have an exciting project idea that I would love to bring to life with your expertise.%0D%0A%0D%0AProject Idea: [Your Idea]%0D%0A%0D%0AI am looking forward to discussing the details with you and exploring how we can make this happen. Your knowledge in mobile and web application development, as well as your proficiency with cloud services like AWS and GCP, makes you the perfect person to collaborate with.%0D%0A%0D%0APlease let me know your availability for a call or meeting to further discuss this project.%0D%0A%0D%0AThank you, and I look forward to your response!%0D%0A%0D%0ABest regards,%0D%0A%0D%0A[Your Name]%0D%0A[Your Contact Information]"
                variant={"ghost"}
                size={{ base: "md", sm: "lg" }}
              >
                {`Let's`} Talk
              </Button>
            </Box>
          </Stack>
        </Stack>
      </OnScreenTransition>
    </Stack>
  );

  return (
    <Grid
      px={5}
      pt={"64px"}
      gap={5}
      alignItems={"center"}
      templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(3, 1fr)" }}
    >
      <Box color={"black"} textAlign={{ base: "center", sm: "right" }}>
        <OnScreenTransition delay={0.3} offscreen={{ x: -20, opacity: 0 }}>
          <Heading>10+ years of experience</Heading>
        </OnScreenTransition>
      </Box>

      <Hide above="sm">{contact}</Hide>

      <Center>
        <OnScreenTransition delay={0.1} offscreen={{ opacity: 0 }}>
          <Image
            draggable={false}
            src={"/images/avatar-peek.png"}
            width={220}
            height={213}
            alt="avatar"
            quality={100}
          />
        </OnScreenTransition>
      </Center>
      <Show above="sm">{contact}</Show>
    </Grid>
  );
}

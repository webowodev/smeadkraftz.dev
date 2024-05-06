import { Box, Heading, Stack, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import avatarImg from "../../../public/images/avatar.jpeg";

export default function Introduce() {
  const imageSize = useBreakpointValue({ base: 100, md: 100, lg: 100 }) ?? 100;
  return (
    <Stack alignItems={"center"} spacing={6}>
      <Image
        src={avatarImg}
        width={imageSize}
        height={imageSize}
        placeholder="blur"
        alt={"Dimas Wibowo"}
        style={{
          borderRadius: imageSize / 2,
        }}
      />
      <Box textAlign={"center"}>
        <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }}>
          Dimas Wibowo
        </Heading>
        <Heading
          as="h2"
          fontWeight={"medium"}
          fontSize={{ base: "xs", md: "md" }}
        >
          Full-Stack Software Engineer
        </Heading>
      </Box>
    </Stack>
  );
}

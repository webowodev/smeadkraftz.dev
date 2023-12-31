import {
  Box,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import avatarImg from "../../../public/images/avatar.jpeg";

export default function Introduce() {
  const imageSize = useBreakpointValue({ base: 120, md: 150, lg: 200 }) ?? 200;
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
        <Heading fontSize={{ base: "4xl", md: "6xl" }}>Dimas Wibowo</Heading>
        <Text fontSize={{ base: "md", md: "2xl" }}>
          Full-Stack Software Engineer
        </Text>
      </Box>
    </Stack>
  );
}

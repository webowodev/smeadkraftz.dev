import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Introduce() {
  return (
    <Stack alignItems={"center"} spacing={6}>
      <Image
        src={"/images/profile-picture.jpeg"}
        width={100}
        height={100}
        alt={"Dimas Wibowo"}
        style={{
          borderRadius: 50,
        }}
      />
      <Box textAlign={"center"}>
        <Heading>Dimas Wibowo</Heading>
        <Text>Software Engineer (Front End / Back End / Mobile)</Text>
      </Box>
    </Stack>
  );
}

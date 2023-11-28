import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { TypeAnimation } from "react-type-animation";

export default function TerminalContainer({ children }: PropsWithChildren) {
  return (
    <Box
      maxW={"100%"}
      border={"1px"}
      borderRadius={"10px"}
      overflow={"hidden"}
      borderColor={useColorModeValue("gray.50", "gray.900")}
      bg={useColorModeValue("white", "gray.800")}
      minH="120px"
    >
      <Stack>
        {/* Start mac style window */}
        <Box
          display={"flex"}
          alignItems={"center"}
          bg={useColorModeValue("white", "gray.900")}
          w="100%"
          h="32px"
          px={4}
          borderRadius="10px 10px 0px 0px"
        >
          <Stack direction={"row"}>
            <Box w={"12px"} h={"12px"} bg={"red.300"} borderRadius={6} />
            <Box w={"12px"} h={"12px"} bg={"yellow.300"} borderRadius={6} />
            <Box w={"12px"} h={"12px"} bg={"green.300"} borderRadius={6} />
          </Stack>
        </Box>
        <Box px={4} pb={2}>
          <Stack fontFamily={"mono"} direction={"row"} spacing={0}>
            <Text textColor={"green.600"} fontWeight={"bold"}>
              smeadkraftz@macbook:
            </Text>
            <Text textColor={"blue.300"}>~</Text>
            <Text textColor={"gray.500"}>$&nbsp;</Text>
            <TypeAnimation
              sequence={["greeting"]}
              cursor={true}
              style={{
                color: "var(--chakra-colors-green-600)",
                fontWeight: "bold",
                fontFamily: "var(--chakra-fonts-mono)",
              }}
            ></TypeAnimation>
          </Stack>
          {children}
        </Box>
      </Stack>
    </Box>
  );
}

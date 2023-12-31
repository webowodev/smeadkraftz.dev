import AppContainer from "@/components/atoms/appContainer";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function NotFoundPage() {
  return (
    <AppContainer pt={24} minH={"85vh"} textAlign={"center"}>
      <Box h={"100%"} flex={1} alignItems={"center"} justifyItems={"center"}>
        <Heading>404</Heading>
        <Text>Page Not Found</Text>
      </Box>
    </AppContainer>
  );
}

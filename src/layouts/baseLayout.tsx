import NavigationHeader from "@/components/organisms/home/navigationHeader";
import { Stack, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function BaseLayout({ children }: PropsWithChildren) {
  const year = new Date().getFullYear();
  return (
    <>
      <NavigationHeader />
      {children}
      <Stack as="footer" alignItems={"center"} p={4} color={"gray.300"}>
        <Text>&copy; {year} Dimas Wibowo. All rights reserved</Text>
      </Stack>
    </>
  );
}

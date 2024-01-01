import AppContainer from "@/components/atoms/appContainer";
import MeCard from "@/components/molecules/about/meCard";
import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContainer pt={24} minH={"100vh"} px={{ base: 5, xl: 24 }} pb={12}>
      <Grid
        templateColumns={"repeat(12, 1fr)"}
        gap={{ base: 4, xl: 12, lg: 5, md: 8 }}
      >
        <GridItem hideBelow={"lg"} colSpan={{ base: 12, lg: 4, xl: 3 }}>
          <Box
            position={{ base: "relative", xl: "sticky", lg: "sticky" }}
            top={{ base: 0, xl: 76, lg: 76 }}
            mb={8}
          >
            <MeCard />
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 8, xl: 9 }}>
          <Center>{children}</Center>
        </GridItem>
        <GridItem hideFrom={"lg"} colSpan={{ base: 12, lg: 4, xl: 3 }}>
          <Box
            position={{ base: "relative", xl: "sticky", lg: "sticky" }}
            top={{ base: 0, xl: 76, lg: 76 }}
            mb={8}
          >
            <MeCard />
          </Box>
        </GridItem>
      </Grid>
    </AppContainer>
  );
}

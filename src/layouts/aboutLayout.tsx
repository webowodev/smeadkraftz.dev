import AppContainer from "@/components/atoms/appContainer";
import BaseLayout, { IBaseLayout } from "./baseLayout";
import { PropsWithChildren } from "react";
import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import MeCard from "@/components/molecules/about/meCard";

export default function AboutLayout({
  children,
  ...rest
}: PropsWithChildren<IBaseLayout>) {
  return (
    <BaseLayout {...rest}>
      <AppContainer pt={24} minH={"85vh"} px={{ base: 5, xl: 24 }} pb={12}>
        <Grid
          templateColumns={"repeat(12, 1fr)"}
          gap={{ base: 4, xl: 12, lg: 5, md: 8 }}
        >
          <GridItem colSpan={{ base: 12, lg: 4, xl: 3 }}>
            <Box position={"sticky"} top={76} mb={8}>
              <MeCard />
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 12, lg: 8, xl: 9 }}>
            <Center>{children}</Center>
          </GridItem>
        </Grid>
      </AppContainer>
    </BaseLayout>
  );
}

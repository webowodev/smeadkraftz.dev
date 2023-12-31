import AppContainer from "@/components/atoms/appContainer";
import MeCard from "@/components/molecules/about/meCard";
import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContainer pt={24} minH={"85vh"} px={{ base: 5, xl: 24 }}>
      <Grid
        templateColumns={"repeat(12, 1fr)"}
        gap={{ base: 4, xl: 12, lg: 12, md: 8 }}
      >
        <GridItem hideBelow={"xl"} colSpan={3}>
          <Box position={"sticky"} top={76}>
            <MeCard />
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, xl: 6 }}>{children}</GridItem>
        {/* Start more articles */}
        <GridItem colSpan={{ base: 12, lg: 6, xl: 3 }}>
          <Card position={"sticky"} top={76}>
            <CardBody>
              <List>
                <ListItem>
                  <Box>More Articles</Box>
                </ListItem>
              </List>
            </CardBody>
          </Card>
        </GridItem>
        {/* End more articles */}
        <GridItem hideFrom={"xl"} colSpan={{ base: 12, lg: 6 }} mb={12}>
          <MeCard />
        </GridItem>
      </Grid>
    </AppContainer>
  );
}

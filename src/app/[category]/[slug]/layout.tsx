import AppContainer from "@/components/atoms/appContainer";
import Image from "@/components/atoms/image";
import LazyImage from "@/components/atoms/lazyImage";
import MeCard from "@/components/molecules/about/meCard";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";

type ArticleLayoutProps = {
  children: React.ReactNode;
  params: {
    category: string;
    slug: string;
  };
};

export default function ArticleLayout({
  children,
  params,
}: ArticleLayoutProps) {
  return (
    <AppContainer pt={24} minH={"85vh"} pb={24} px={{ base: 5, xl: 24 }}>
      <Grid
        templateColumns={"repeat(12, 1fr)"}
        gap={{ base: 4, xl: 12, lg: 12, md: 8 }}
      >
        <GridItem hideBelow={"xl"} colSpan={3}>
          <Box position={"sticky"} top={76}>
            <MeCard />
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, xl: 9 }} mb={8}>
          {children}
        </GridItem>
        <GridItem hideFrom={"xl"} colSpan={{ base: 12 }} mb={12}>
          <MeCard />
        </GridItem>
      </Grid>
    </AppContainer>
  );
}

import AboutLayout from "@/layouts/aboutLayout";
import { IMenus } from "@/lib/entities/menu";
import fetchCommonData from "@/lib/usecases/fetchCommonData";
import { Box, Card, CardBody, Center, Heading, Stack } from "@chakra-ui/react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";

export const getServerSideProps = (async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  // fetch data
  const results = await Promise.all([await fetchCommonData()]);

  let notFound = false;

  return {
    props: {
      ...results[0],
    },
    notFound,
  };
}) satisfies GetServerSideProps<{
  menus: IMenus;
}>;

export default function AboutPage() {
  return (
    <AboutLayout title="About" description="About">
      <Box maxW={{ base: "100%", lg: "80%", xl: "80%" }}>
        <Center mb={8}>
          <Heading>What do I do?</Heading>
        </Center>
        <Stack>
          {Array.from(new Array(10)).map((_, index) => (
            <Card key={index}>
              <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                harum aliquam omnis voluptatum, fugiat placeat optio aliquid!
                Tempora fugit a iure ducimus? Nisi facere unde quod neque sunt
                voluptates harum.
              </CardBody>
            </Card>
          ))}
        </Stack>
      </Box>
    </AboutLayout>
  );
}

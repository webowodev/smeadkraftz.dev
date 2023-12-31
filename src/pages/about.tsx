import AboutLayout from "@/layouts/aboutLayout";
import { IMenus } from "@/lib/entities/menu";
import fetchCommonData from "@/lib/usecases/fetchCommonData";
import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import NextLink from "next/link";
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
      <Box
        minW={{ base: "100%", lg: "80%", xl: "60%" }}
        maxW={{ base: "100%", lg: "80%", xl: "60%" }}
      >
        <Center mb={8}>
          <Heading>What do I do?</Heading>
        </Center>
        <Stack>
          <Card>
            <CardBody>
              <Heading fontSize={"2xl"} mb={4}>
                Full-Stack Software Engineer
              </Heading>
              <Text>
                I love to write code to build things, design systems and
                architectures. Currently I am working remotely{" "}
                <Link as={NextLink} href="https://karyakarsa.com">
                  @karyakarsa
                </Link>
                .
              </Text>
            </CardBody>
          </Card>
        </Stack>
      </Box>
    </AboutLayout>
  );
}

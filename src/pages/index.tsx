import BaseLayout from "@/layouts/baseLayout";
import HelloSection from "@/components/organisms/home/helloSection";
import { Box, Button, Stack } from "@chakra-ui/react";
import Introduce from "@/components/molecules/introduce";
import AppContainer from "@/components/atoms/appContainer";
import { GetServerSideProps } from "next";
import { IMenus } from "@/lib/entities/menu";
import fetchCommonData from "@/lib/usecases/fetchCommonData";
import React from "react";
import { Link } from "@chakra-ui/next-js";

export const getServerSideProps = (async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const { menus } = await fetchCommonData();
  return {
    props: {
      menus: menus || [],
    },
  };
}) satisfies GetServerSideProps<{
  menus: IMenus;
}>;

export default function Home() {
  return (
    <BaseLayout
      title="Home"
      description="Currently working as VP of Engineering at KaryaKarsa with over 8 years of experience as Full-Stack Software Engineer, and I really enjoy bringing ideas to life through responsive web applications and mobile apps. My toolkit includes React, Node.js, Supabase, Flutter and many more – the ingredients for some pretty cool digital experiences."
    >
      <main>
        <AppContainer
          pt={24}
          pb={12}
          h="90vh"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack minW={{ base: "100%", md: "70%", lg: "50%" }} spacing={6}>
            {/* Start hello */}
            <Introduce />
            <HelloSection />
            {/* End hello */}
            <Box textAlign={"center"}>
              <Button as={Link} href={"/about"} size={"lg"} variant={"outline"}>
                Know More
              </Button>
            </Box>
          </Stack>
        </AppContainer>
      </main>
    </BaseLayout>
  );
}

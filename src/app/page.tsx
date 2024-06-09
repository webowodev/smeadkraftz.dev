import AppContainer from "@/components/atoms/appContainer";
import { MacbookScroll } from "@/components/organisms/cn/macbookScroll";
import HeroSection from "@/components/organisms/home/heroSection";
import { Stack, Text } from "@chakra-ui/react";

export const metadata = {
  title: "Dimas Wibowo - Home",
  description:
    "Currently working as VP of Engineering at KaryaKarsa with over 8 years of experience as Full-Stack Software Engineer, and I really enjoy bringing ideas to life through responsive web applications and mobile apps. My toolkit includes React, Node.js, Supabase, Flutter and many more – the ingredients for some pretty cool digital experiences.",
  openGraph: {
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/images/card.png`],
  },
};

export default function Page() {
  return (
    <AppContainer as="main" maxW="container.2xl">
      {/* <HeroSection /> */}
      <MacbookScroll
        title={
          <Stack>
            <Text
              fontFamily={"mono"}
              fontWeight={"bold"}
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              {'$hello = "world";'}
            </Text>
            <Text fontFamily={"mono"}>
              {"// scroll down to see my macbook screen"}
            </Text>
          </Stack>
        }
        src={
          <div className={"scale-75"}>
            <HeroSection />
          </div>
        }
      />
    </AppContainer>
  );
}

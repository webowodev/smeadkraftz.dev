import OnScreenTransition from "@/components/atoms/onScreenTransition";
import SectionContainer from "@/components/atoms/sectionContainer";
import LetUsTalkBanner from "@/components/molecules/about/letUsTalkBanner";
import ExperiencesSection from "@/components/organisms/about/experiencesSection";
import ServicesSection from "@/components/organisms/about/servicesSection";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Dimas Wibowo",
  openGraph: {
    images: ["https://webowo.dev/images/card-2.png"],
  },
};

export default function AboutPage() {
  return (
    <Stack minH={"90vh"} gap={10}>
      <OnScreenTransition offscreen={{ y: -20, opacity: 0 }}>
        <SectionContainer
          containerProps={{ px: 5 }}
          bgGradient={"radial(#ADFCAD, #98EC98)"}
          pt={"76px"}
        >
          {/* start about me */}
          <Stack pt={8} textAlign={"center"} spacing={4}>
            <OnScreenTransition delay={0.2}>
              <Heading color="black" as={"h1"} fontWeight={"bold"}>
                About Dimas
              </Heading>
            </OnScreenTransition>
            <OnScreenTransition delay={0.3}>
              <Box
                as={"blockquote"}
                fontSize={"lg"}
                px={{ base: 0, md: 24 }}
                color={"black"}
                fontWeight={"medium"}
              >
                Since 2013 I identified my self as a Full-Stack Software
                Engineer. I did web & mobile app development also cloud
                computing to make sure I can deliver solutions to help clients
                do business across various sectors.
              </Box>
            </OnScreenTransition>
          </Stack>
          {/* end about me */}

          {/* start let us talk */}
          <LetUsTalkBanner />
          {/* end let us talk */}
        </SectionContainer>
      </OnScreenTransition>

      {/* start experiences section */}
      <ExperiencesSection />
      {/* end experiences section */}

      {/* start services section */}
      <ServicesSection />
      {/* end services section */}
    </Stack>
  );
}

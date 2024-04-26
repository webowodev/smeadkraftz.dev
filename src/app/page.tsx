import AppContainer from "@/components/atoms/appContainer";
import HeroSection from "@/components/organisms/home/heroSection";

export const metadata = {
  title: "Dimas Wibowo - Home",
  description:
    "Currently working as VP of Engineering at KaryaKarsa with over 8 years of experience as Full-Stack Software Engineer, and I really enjoy bringing ideas to life through responsive web applications and mobile apps. My toolkit includes React, Node.js, Supabase, Flutter and many more – the ingredients for some pretty cool digital experiences.",
  openGraph: {
    images: ["https://webowo.dev/images/card.png"],
  },
};

export default function Page() {
  return (
    <AppContainer
      as="main"
      pt={24}
      pb={12}
      h="100vh"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <HeroSection />
    </AppContainer>
  );
}

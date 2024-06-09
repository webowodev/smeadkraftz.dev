import OnScreenTransition from "@/components/atoms/onScreenTransition";
import Section from "@/components/atoms/section";
import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

type IService = {
  title: string;
  description: string;
};

export default function ServicesSection() {
  const services: IService[] = [
    {
      title: "Web Development",
      description:
        "Elevate your online presence with bespoke web solutions designed and developed by a seasoned full-stack developer. From sleek landing pages to complex web applications, I'll work closely with you to bring your vision to life, utilizing the latest technologies and industry best practices.",
    },
    {
      title: "Mobile App Development",
      description:
        "Reach your audience wherever they are with custom mobile applications crafted specifically for iOS and Android platforms. As a solo developer proficient in Flutter, Expo, and React Native, I offer end-to-end app development services, ensuring your app is not only functional but also user-friendly and intuitive.",
    },
    {
      title: "Cloud Computing Solutions",
      description:
        "Harness the power of the cloud to scale your business securely and efficiently. With expertise in AWS and GCP, I can help you design, deploy, and manage cloud infrastructure tailored to your unique requirements, allowing you to focus on what matters most – growing your business.",
    },
  ];
  return (
    <Section
      title="Services"
      description="Transforming ideas into Digital Realities"
    >
      <Grid
        gap={4}
        alignItems={"center"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      >
        {services.map((service, index) => (
          <OnScreenTransition
            offscreen={{ x: 20, opacity: 0 }}
            delay={index > 0 ? 0.1 + (index * 20) / 100 : 0.1}
            key={`service-${index}`}
          >
            <Card>
              <CardBody>
                <Stack gap={4}>
                  <Heading size="md">{service.title}</Heading>
                  <Text fontSize={"sm"}>{service.description}</Text>
                </Stack>
              </CardBody>
            </Card>
          </OnScreenTransition>
        ))}
      </Grid>
    </Section>
  );
}

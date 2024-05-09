import OnScreenTransition from "@/components/atoms/onScreenTransition";
import Section from "@/components/atoms/section";
import ExperienceCard from "@/components/molecules/about/experienceCard";
import Experience from "@/lib/entities/experience";
import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";

export default function ExperiencesSection() {
  const experiences: Experience[] = [
    new Experience({
      title: "VP of Engineering (Remote)",
      company: "karyakarsa.com",
      description: "PT. Karya Karsa Indonesia, Jakarta, Indonesia",
      startDate: "Feb 2023",
      endDate: "present",
    }),
    new Experience({
      title: "Tech Lead (Remote)",
      company: "karyakarsa.com",
      description: "PT. Karya Karsa Indonesia, Jakarta, Indonesia",
      startDate: "Jan 2022",
      endDate: "Jan 2023",
    }),
    new Experience({
      title: "Mobile Developer (Remote)",
      company: "karyakarsa.com",
      description: "PT. Karya Karsa Indonesia, Jakarta, Indonesia",
      startDate: "Jan 2021",
      endDate: "Dec 2021",
    }),
    new Experience({
      title: "Frontend Developer",
      company: "ritase.com",
      description: "PT. Digital Truk Indonesia, Jakarta, Indonesia",
      startDate: "Jul 2019",
      endDate: "Dec 2020",
    }),
    new Experience({
      title: "Full-Stack Developer",
      company: "Freelance",
      description: "Self employed",
      startDate: "Feb 2016",
      endDate: "Jun 2019",
    }),
  ];

  return (
    <Section title={"Experiences"}>
      <Grid
        gap={4}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      >
        {experiences.map((experience, index) => (
          <GridItem key={`experience-${index}`}>
            <OnScreenTransition
              offscreen={{ x: 20, opacity: 0 }}
              delay={index > 0 ? 0.1 + (index * 20) / 100 : 0.1}
            >
              <ExperienceCard experience={experience} />
            </OnScreenTransition>
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
}

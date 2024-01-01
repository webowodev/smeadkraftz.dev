import Timeline, { TimelineEvent } from "@/components/molecules/timeline";
import { Box, Center, Heading } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Dimas Wibowo's Experiences",
  openGraph: {
    images: ["/images/card.png"],
  },
};
export default function ExperiencesPage() {
  const events: TimelineEvent[] = [
    {
      date: {
        start: "February 2023",
        current: true,
      },
      company: {
        name: "karyakarsa.com",
        url: "https://karyakarsa.com",
      },
      title: "VP of Engineering (Remote)",
      role: [
        "Aligned technical strategies with overall business goals",
        "Fostered a culture of innovation and collaboration in the engineering department",
        "Led successful product launches for increased market share and revenue",
        "Collaborate with other executives to develop and implement the overall business strategy, ensuring that the engineering strategy aligns with and supports the company's goals.",
        "Optimized engineering processes for improved efficiency and faster time-to-market",
      ],
      accomplishments: [
        "Developed and maintained internal tools and workflows for engineering teams at KaryaKarsa.",
        "Led and mentored engineers in the engineering team at KaryaKarsa.",
        "Created and maintained internal tools and workflows for engineering teams at KaryaKarsa.",
      ],
      technologies: [
        "Vue",
        "NodeJS",
        "AWS",
        "Laravel",
        "Terraform",
        "MySQL",
        "PostgreSQL",
      ],
    },
    {
      date: {
        start: "January 2022",
        end: "February 2023",
      },
      company: {
        name: "karyakarsa.com",
        url: "https://karyakarsa.com",
      },
      title: "Tech Lead (Remote)",
      role: [
        "Provide technical leadership and guidance to engineering teams at KaryaKarsa.",
        "Responsible for project management and ensuring the successful delivery of software products.",
        "Architect scalable and efficient solutions to meet business requirements.",
        "Conduct code reviews and ensure adherence to coding standards for high-quality code.",
        "Communicate effectively and collaborate with stakeholders to align technical solutions with business goals.",
        "Drive continuous improvement and innovation within the organization.",
        "Actively mentor and develop team members for their professional growth.",
      ],
      accomplishments: [
        "Implemented agile methodologies, enhancing team collaboration and speeding up project delivery.",
        "Implement #noestimate movement",
        "Led the adoption of strict code review processes, resulting in improved code quality and fewer bugs.",
        "Developed and maintained internal database query builder for engineering teams at KaryaKarsa.",
      ],
      technologies: [
        "Vue",
        "NodeJS",
        "Flutter",
        "AWS",
        "Laravel",
        "Terraform",
        "MySQL",
        "PostgreSQL",
      ],
    },
    {
      date: {
        start: "January 2021",
        end: "December 2021",
      },
      company: {
        name: "karyakarsa.com",
        url: "https://karyakarsa.com",
      },
      title: "Mobile Developer (Remote)",
      role: [
        "Develop KaryaKarsa mobile app for both Android & iOS",
        "Manage CI / CD to facilitate development process",
      ],
      technologies: ["React", "Vue", "NodeJS"],
    },
    {
      date: {
        start: "July 2019",
        end: "December 2020",
      },
      company: {
        name: "ritase.com",
        url: "https://ritase.com",
      },
      title: "Frontend Developer",
      role: ["Contribute to develop Ritase internal web app"],
      accomplishments: ["Transpile web app to Android app using Capacitor"],
      technologies: ["React", "AngularJS", "NodeJS", "Capacitor"],
    },
    {
      date: {
        start: "February 2016",
        end: "June 2019",
      },
      company: {
        name: "Freelance",
        url: "#",
      },
      title: "Full-stack Developer",
      role: [
        "Contributed to develop mostly on Governments SaaS Mobile & Web projects at CV. Smart Data Integrasi",
        "Developed mobile application (Android) to facilitate consignment and recording transaction of safekeeping and withdrawal of sales items",
        "Developed web & mobile application (Android) to facilitate local television company recording customer location, record transaction, dan make invoice",
      ],
      technologies: ["Vue", "React", "NodeJS", "Laravel", "MySQL"],
    },
  ];

  return (
    <Box
      minW={{ base: "100%", lg: "80%", xl: "60%" }}
      maxW={{ base: "100%", lg: "80%", xl: "60%" }}
    >
      <Center mb={8}>
        <Heading>My Experiences</Heading>
      </Center>
      <Timeline events={events} />
    </Box>
  );
}

import Experience from "@/lib/entities/experience";
import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <Card>
      <CardBody>
        <Stack>
          <Heading size={"md"}>{experience.title}</Heading>
          <Text mb={2} as="small" size="xs">
            {experience.company} | {experience.startDate} - {experience.endDate}
          </Text>
          <Text size="xs">{experience.description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

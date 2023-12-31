import Link from "@/components/atoms/link";
import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function AboutPage() {
  return (
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
              <Link href="https://karyakarsa.com">@karyakarsa</Link>.
            </Text>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
}

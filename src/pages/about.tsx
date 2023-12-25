import AboutLayout from "@/layouts/aboutLayout";
import { Box, Card, CardBody, Center, Heading, Stack } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <AboutLayout>
      <Box maxW={{ base: "100%", lg: "80%", xl: "80%" }}>
        <Center mb={8}>
          <Heading>What do I do?</Heading>
        </Center>
        <Stack>
          {Array.from(new Array(10)).map((_, index) => (
            <Card key={index}>
              <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                harum aliquam omnis voluptatum, fugiat placeat optio aliquid!
                Tempora fugit a iure ducimus? Nisi facere unde quod neque sunt
                voluptates harum.
              </CardBody>
            </Card>
          ))}
        </Stack>
      </Box>
    </AboutLayout>
  );
}

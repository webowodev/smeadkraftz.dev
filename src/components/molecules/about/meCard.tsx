import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import SocialLinks from "../socialLinks";
import Link from "@/components/atoms/link";

export default function MeCard() {
  const imageSize: number = 220;
  return (
    <Card w="100%">
      <CardBody textAlign={"center"}>
        <Stack spacing={12}>
          <Box>
            <Stack spacing={8} mb={4}>
              <Center>
                <Image
                  src={"/images/avatar.jpeg"}
                  width={imageSize}
                  height={imageSize}
                  alt={"Dimas Wibowo"}
                  style={{
                    borderRadius: imageSize / 2,
                  }}
                />
              </Center>
              <Heading>Who I am?</Heading>
            </Stack>
            <Text mb={4} fontSize={"lg"}>
              Hi! I am <strong>Dimas Wibowo</strong>, a full-stack software
              engineer based in Jakarta. Currently working as VP of Engineering{" "}
              <Link
                color="red.400"
                target="_blank"
                href="https://karyakarsa.com"
              >
                @karyakarsa
              </Link>
              .
            </Text>
            <Text fontSize={"lg"}>
              I am most experienced in <br />{" "}
              <Text as="span" color="blue.300" fontWeight={"bold"}>
                Flutter
              </Text>
              ,{" "}
              <Text as="span" color="blue.500" fontWeight={"bold"}>
                ReactJS
              </Text>
              ,{" "}
              <Text as="span" color="green.500" fontWeight={"bold"}>
                NodeJS
              </Text>{" "}
              and{" "}
              <Text as="span" color="orange.400" fontWeight={"bold"}>
                AWS
              </Text>
            </Text>
          </Box>
          {/* Start Links and supports */}
          <Stack alignItems={"center"} spacing={8}>
            <Button
              as={"a"}
              target="_blank"
              w="full"
              href="https://karyakarsa.com/daemswibowo/support"
            >
              Support Me
            </Button>
            <SocialLinks />
          </Stack>
          {/* End Links and supports */}
        </Stack>
      </CardBody>
    </Card>
  );
}

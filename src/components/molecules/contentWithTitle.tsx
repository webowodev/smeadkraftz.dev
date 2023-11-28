import { Heading, Stack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function ContentWithTitle({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  return (
    <Stack spacing={4}>
      <Heading size={"lg"}>{title}</Heading>
      {children}
    </Stack>
  );
}

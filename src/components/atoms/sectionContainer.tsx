import { Box, BoxProps, Container, ContainerProps } from "@chakra-ui/react";

export default function SectionContainer({
  children,
  containerProps,
  ...rest
}: BoxProps & {
  containerProps?: ContainerProps;
}) {
  return (
    <Box as={"section"} {...rest}>
      <Container maxW="container.lg" px={{ base: 5 }} {...containerProps}>
        {children}
      </Container>
    </Box>
  );
}

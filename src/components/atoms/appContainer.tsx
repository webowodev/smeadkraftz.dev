import { Container, ContainerProps } from "@chakra-ui/react";
export default function AppContainer({ children, ...rest }: ContainerProps) {
  return (
    <Container maxW="container.2xl" px={{ base: 5, lg: 40, xl: 12 }} {...rest}>
      {children}
    </Container>
  );
}

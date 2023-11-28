import { Container, ContainerProps } from "@chakra-ui/react";
export default function AppContainer({ children, ...rest }: ContainerProps) {
  return (
    <Container maxW="container.md" {...rest}>
      {children}
    </Container>
  );
}

import { Heading, Stack, StackProps, Text } from "@chakra-ui/react";
import SectionContainer from "./sectionContainer";
import OnScreenTransition from "./onScreenTransition";

type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
} & StackProps;
export default function Section({
  title,
  description,
  children,
  ...rest
}: Props) {
  return (
    <SectionContainer {...rest}>
      <OnScreenTransition offscreen={{ y: 20, opacity: 0 }}>
        <Stack gap={4}>
          <Stack>
            <Heading size={"md"}>{title}</Heading>
            {description && <Text>{description}</Text>}
          </Stack>

          {children}
        </Stack>
      </OnScreenTransition>
    </SectionContainer>
  );
}

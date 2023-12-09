import { Heading, HeadingProps } from "@chakra-ui/react";
import { PropsWithChildren, useMemo } from "react";

export default function HeadingBlock({
  type,
  children,
}: PropsWithChildren<{
  type: string;
}>) {
  const textProps = useMemo<HeadingProps>(() => {
    switch (type) {
      case "heading_1":
        return {
          as: "h1",
          size: "xl",
          mt: "1.25rem",
          mb: "0.25rem",
        };
      case "heading_2":
        return {
          as: "h2",
          size: "lg",
          mt: "1.25rem",
          mb: "0.25rem",
        };
      case "heading_3":
        return {
          as: "h3",
          size: "md",
          mt: "1.25rem",
          mb: "0.25rem",
        };
      default:
        return {};
    }
  }, [type]);
  return <Heading {...textProps}>{children}</Heading>;
}

"use client";
import { useColorModeValue, useToken } from "@chakra-ui/react";
import { SocialIcon, SocialIconProps } from "react-social-icons";

export default function SocialButton(props: SocialIconProps) {
  // get color hex from chakra theme
  const [gray50, gray900, gray800] = useToken("colors", [
    "gray.50",
    "gray.900",
    "gray.800",
  ]);

  // define bg color
  const bgColor = useColorModeValue(gray50, gray800);

  // define fgColor
  const fgColor = useColorModeValue(gray900, "white");

  return (
    <SocialIcon
      bgColor={bgColor}
      fgColor={fgColor}
      style={{ width: 32, height: 32 }}
      {...props}
    />
  );
}

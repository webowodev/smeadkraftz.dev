import { useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DayNightToggle = dynamic(() => import("react-day-and-night-toggle"), {});

export default function ToggleColorModeButton() {
  const { colorMode, setColorMode } = useColorMode();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(colorMode === "dark");
  }, [colorMode]);

  return (
    <DayNightToggle
      shadows={false}
      animationInactive={false}
      onChange={() => {
        setIsDarkMode(!isDarkMode);
        setTimeout(() => {
          setColorMode(isDarkMode ? "light" : "dark");
        }, 500);
      }}
      checked={isDarkMode}
    />
  );
}

import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("gray.50", "gray.900")(props),
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  colors: {
    gray: {
      "50": "#EEF3F6",
      "100": "#D0DEE6",
      "200": "#B3C8D6",
      "300": "#95B3C6",
      "400": "#779DB6",
      "500": "#5988A6",
      "600": "#476D85",
      "700": "#355264",
      "800": "#243642",
      "900": "#121B21",
    },
    green: {
      "50": "#F3F9EC",
      "100": "#DCEDC9",
      "200": "#C6E2A7",
      "300": "#B0D684",
      "400": "#9ACB62",
      "500": "#84C03F",
      "600": "#699933",
      "700": "#4F7326",
      "800": "#354D19",
      "900": "#1A260D",
    },
    pale: {
      "50": "#F4F9EB",
      "100": "#DFEFC7",
      "200": "#CBE5A4",
      "300": "#B6DB80",
      "400": "#A2D15C",
      "500": "#8EC639",
      "600": "#719F2D",
      "700": "#557722",
      "800": "#394F17",
      "900": "#1C280B",
    },
  },
  fonts: {
    body: "Noto Sans, sans-serif",
    heading: "Raleway, sans-serif",
    mono: "Menlo, monospace",
  },

  components: {
    Button: {
      variants: {
        solid: (props: StyleFunctionProps) => ({
          bg: mode("green.500", "green.300")(props),
          color: mode("white", "gray.900")(props),
          textTransform: "uppercase",
          fontWeight: "bold",
          _hover: {
            bg: mode("green.400", "green.400")(props),
          },
          _active: {
            bg: mode("green.300", "green.500")(props),
          },
        }),
      },
    },
    // Add more components and variants as needed
  },
});

export default theme;

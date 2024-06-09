import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import cardTheme from "./styles/card";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("white", "gray.900")(props),
      transitionProperty: "all",
      transitionDuration: "ultra-slow",
      letterSpacing: ".1em",
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  colors: {
    gray: {
      "50": "#e8e8e9",
      "100": "#d1d1d2",
      "200": "#bababc",
      "300": "#a3a3a6",
      "400": "#8f9093",
      "500": "#75767a",
      "600": "#5c5d62",
      "700": "#44454b",
      "800": "#2D3035",
      "900": "#181a20",
    },
    green: {
      "50": "#EDF8F1",
      "100": "#90d4a8",
      "200": "#78cb97",
      "300": "#5ec287",
      "400": "#3fb876",
      "500": "#00AF66",
      "600": "#008c52",
      "700": "#007a47",
      "800": "#004629",
      "900": "#002314",
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
    body: "var(--font-urbanist)",
    heading: "var(--font-urbanist)",
    mono: "Menlo, monospace",
  },

  components: {
    Link: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode("green.500", "green.500")(props),
        fontWeight: "bold",
        _hover: {
          color: mode("green.400", "green.400")(props),
        },
        _active: {
          color: mode("green.600", "green.600")(props),
        },
      }),
    },
    Button: {
      variants: {
        solid: (props: StyleFunctionProps) => ({
          borderRadius: "full",
          bg: mode("green.500", "green.100")(props),
          color: mode("white", "black")(props),
          fontWeight: "bold",
          _hover: {
            bg: mode("green.400", "green.300")(props),
          },
          _active: {
            bg: mode("green.600", "green.400")(props),
          },
        }),
        outline: (props: StyleFunctionProps) => ({
          borderRadius: "full",
          bg: mode("transparent", "transparent")(props),
          color: mode("green.500", "green.100")(props),
          borderColor: mode("green.500", "green.100")(props),
          fontWeight: "bold",
          _hover: {
            bg: mode("green.500", "green.100")(props),
            borderColor: mode("green.500", "green.100")(props),
            color: mode("white", "black")(props),
            textDecoration: "none",
          },
          _active: {
            bg: mode("green.600", "gray.800")(props),
            borderColor: mode("green.600", "gray.800")(props),
            color: mode("white", "white")(props),
            textDecoration: "none",
          },
        }),
        ghost: (props: StyleFunctionProps) => ({
          borderRadius: "full",
          bg: mode("white", "gray.800")(props),
          color: mode("green.500", "white")(props),
          fontWeight: "bold",
          _hover: {
            bg: mode("green.50", "gray.700")(props),
            color: mode("green.400", "white")(props),
          },
          _active: {
            bg: mode("green.100", "gray.800")(props),
            color: mode("green.600", "white")(props),
          },
        }),
        link: (props: StyleFunctionProps) => ({
          color: mode("green.500", "white")(props),
          fontWeight: "bold",
          _hover: {
            color: mode("green.400", "white")(props),
          },
          _active: {
            color: mode("green.600", "white")(props),
          },
        }),
      },
    },
    // Add more components and variants as needed
  },
});

export default theme;

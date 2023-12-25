import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// customize card
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle((props: any) => ({
  container: {
    bg: mode("white", "gray.800")(props),
  },
}));

const cardTheme = defineMultiStyleConfig({
  baseStyle,
});

export default cardTheme;

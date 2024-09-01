// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { color } from "framer-motion";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const globals = {
  body: {
    bg: "white",
    color: "black",
  },
};

const fonts = {
  heading: `'Open Sans', 'sans-serif'`,
  body: `'sans-serif'`,
};

const colors = {
  blue: {
    100: "#03045E",
    200: "#023E8A",
    300: "#0077B6",
    400: "#0096C7",
    500: "#00B4D8", // Default
    600: "#48CAE4",
    700: "#90E0EF",
    800: "#ADE8F4",
    900: "#CAF0F8",
  },
  secondary: {
    50: "#FEEBC8",
    100: "#FBD38D",
    200: "#F6AD55",
    300: "#ED8936",
    400: "#DD6B20",
    500: "#C05621", // Default
    600: "#9C4221",
    700: "#7B341E",
    800: "#652B19",
    900: "#4A2317",
  },
};

const Button = {
  baseStyle: {
    fontWeight: "bold", // Set the default font weight for all buttons
  },
  sizes: {
    md: {
      fontSize: "lg",
      px: 6,
      py: 4,
    },
  },
  variants: {
    solid: {
      bg: "brown.900", // Default background color
      color: "white",
      _hover: {
        bg: "blue.200", // Hover variant
        color: "white",
      },
    },
    outline: {
      // borderColor: 'brown.500',
      color: "black",
      _hover: {
        bg: "blue.300",
        color: "white",
      },
    },
  },
  defaultProps: {
    variant: "solid", // Set the default variant
  },
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  globals,
  components: {
    Tabs: {
      variants: {
        enclosed: {
          tab: {
            style: { borderBottom: "none" },
            borderBottom: "none",
            _selected: {
              color: "black",
              bg: "blue.200",
              borderBottom: "none",
              borderColor: "blue.200",
              fontWeight: "bold",
            },
            
          },
        },
      },
    },
    Button, // Apply the Button customizations
  },
});

export default theme;

// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { color } from "framer-motion";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const globals = {
  body: {
    bg: "#1D1817",
    color: "white",
  },
};

const fonts = {
  heading: `'Open Sans', 'sans-serif'`,
  body: `'sans-serif'`,
};

const colors = {
  brown: {
    50: "#FFEDD8",
    100: "#F3D5B5",
    200: "#E7BC91",
    300: "#D4A276",
    400: "#BC8A5F",
    500: "#A47148", // Default
    600: "#8B5E34",
    700: "#6F4518",
    800: "#603808",
    900: "#583101",
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
        bg: "brown.600", // Hover variant
      },
    },
    outline: {
      // borderColor: 'brown.500',
      color: "black",
      _hover: {
        bg: "brown.800",
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
              bg: "brown.200",
              borderBottom: "none",
              borderColor: "brown.200",
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

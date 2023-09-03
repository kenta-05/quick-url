import { extendTheme } from "@chakra-ui/react";
import backgroundImage from "../asset/background.png";

const customTheme = extendTheme({
  colors: {
    primary: {
      500: { light: "#f6f8ff", dark: "#515259" },
      600: { light: "#E1E8FF", dark: "#2b2d34" },
    },
    secondary: {
      400: { light: "#6e7aa8", dark: "#747474" },
      500: { light: "#5E6DA4", dark: "#d7d7d7" },
    },
    tertiary: {
      500: { light: "#FF4545", dark: "#FF4545" },
      600: { light: "#ce2121", dark: "#ce2121" },
    },
    nomal: {
      500: { light: "#FFFFFF", dark: "#5b5b5b" },
    },
  },
  breakpoints: {
    sm: "23.75rem",
    md: "37rem",
    lg: "54rem",
    xl: "83.75rem",
    "2xl": "96rem",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  components: {
    Text: {
      baseStyle: {
        cursor: "default",
      },
      variants: {
        primary: {
          color: "white",
          fontSize: "4xl",
        },
        secondary: {
          fontSize: "1.3rem",
        },
        tertiary: {
          fontSize: "lg",
          p: "1px",
        },
      },
    },
    Button: {
      variants: {
        primary: {
          color: "white",
          borderRadius: "sm",
          letterSpacing: "0.065em",
        },
        secondary: {
          color: "white",
          fontSize: "2.3rem",
          borderRadius: "md",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          h: "12",
          pb: "1",
          _hover: { filter: "brightness(93%)", transform: "scale(0.97)" },
        },
        account: {
          borderRadius: "full",
          color: "white",
          boxShadow: "0px 6px 2px #591212",
          transition: "transform 0.3s, box-shadow 0.3s",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        userSelect: "none",
        fontFamily: "Noto Sans JP",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
  },
});

export default customTheme;

import { extendTheme } from "@chakra-ui/react";
import backgroundImage from "../asset/background.png";

const customTheme = extendTheme({
  colors: {
    primary: {
      500: "#f6f8ff",
      600: "#E1E8FF",
    },
    secondary: {
      400: "#8590b7",
      500: "#5E6DA4",
    },
    tertiary: {
      500: "#FF4545",
      600: "#ce2121",
    },
  },
  breakpoints: {
    sm: "23.75rem",
    md: "36.25rem",
    lg: "54rem",
    xl: "83.75rem",
    "2xl": "96rem",
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
          color: "secondary.500",
          fontSize: "1.4rem",
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
          bg: "secondary.400",
          color: "white",
          borderRadius: "sm",
          letterSpacing: "0.065em",
          _hover: {
            bg: "secondary.500",
          },
        },
        secondary: {
          bg: "tertiary.500",
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
          bg: "tertiary.500",
          color: "white",
          boxShadow: "0px 6px 2px #591212",
          transition: "transform 0.3s, box-shadow 0.3s",
          _hover: {
            bg: "tertiary.600",
            transform: "translateY(2px)",
            boxShadow: "0px 0px 2px #591212",
          },
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

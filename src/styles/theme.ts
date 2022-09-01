import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      500: "#8B5CF6",
      400: "#A78BFA",
    },
    secondary: {
      500: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#A78BFA",
      title: "#8B5CF6",
      body: "#333",
    },
    shape: {
      background: "#ffffff",
      gradient:
        "linear-gradient(180deg, rgba(161, 58, 241, 0.65) 0%, rgba(182, 44, 248, 0.704) 100%)",
    },
    background: {
      300: "#F5F5F5",
    },
    border: {
      300: "#ccc",
    },
  },

  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },

  styles: {
    global: {
      body: {
        bg: "secondary.500",
        w: "100vw",
        h: "100vh",
        overflowX: "hidden",
        color: "tex.body",
      },
    },
  },
});

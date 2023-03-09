import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    blue: {
      discord: "#5865F2",
      twitter: "#55ACEE",
      dark: "#2745E2",
      light: "#E3FAFF",
    },
    black: {
      body: "#373737",
      bodyLight: "#AAAAAA",
      borderColor: "#E3E3E3",
      dark: "#000000",
      tableHeader: "#707070",
      tabHeader: "#3A3A3A",
    },
    gold: {
      save: "#9E7008",
    },
    green: {
      success: "#3BBC66",
    },
    orange: {
      warning: "#EB9541",
    },
    pink: {
      dark: "#EF3291",
      light: "#F8E3FF",
    },
    purple: {
      dark: "#6B13E5",
      light: "rgba(151, 71, 255, 1)",
    },
    red: {
      error: "#DC4537",
    },
    white: {
      offWhite: "#FFF7E3",
    },
    gray: {
      icon: "#E3E3E3",
    },
  },
  components: {
    Button: {
      variants: {
        talkToMe: {
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: ["none", "none", "none", "flex"],
          color: "white",
          fontSize: "0.65em",
          height: "4.5rem",
          width: "4.5rem",
          position: "absolute",
          bottom: "25vh",
          left: ["", "", "", "2.5rem"],
          right: ["2rem", "2.5rem", "2.5rem", "2.5rem", 0],
          _hover: {
            opacity: 0.8,
          },
          _active: { opacity: 0.65 },
        },
        timeOutline: {
          padding: "0 0.5rem 0 0.5rem",
          borderRadius: 10,
          border: "1px",
          borderStyle: "solid",
          borderColor: "#000",
          height: 7,
        },
        roundOutline: {
          borderRadius: "50%",
          minWidth: "1.5rem",
          height: "1.5rem",
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: "1px",
          padding: 0,
        },
        iconBtn: {
          _hover: {
            opacity: 0.35,
          },
          _active: {
            opacity: 1,
          },
        },
        audioBtn: {
          background: "white",
          borderRadius: "15px",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        },
        ideaButton: {
          fontSize: "14px",
          fontWeight: 500,
          background: "#F3BA2F",
          boxShadow: "3px 3px 0px #1A1A1A",
          borderRadius: 24,
          border: "1px",
          borderStyle: "solid",
          borderColor: "#000",
          paddingX: "2.5rem",
          paddingY: "1.5rem",
          _hover: {
            opacity: 0.85,
          },
          _active: {
            boxShadow: "0px 0px 0px #9E7008",
          },
        },
        socialButton: {
          height: "3rem",
          width: "3.25rem",
          borderRadius: 15,
          fontSize: "14px",
          fontWeight: 500,
          background: "#F3BA2F",
          boxShadow: "3px 3px 0px #1A1A1A",
          borderRadius: 16,
          border: "1px",
          borderStyle: "solid",
          borderColor: "#000",
          _hover: {
            opacity: 0.85,
          },
          _active: {
            boxShadow: "0px 0px 0px #9E7008",
          },
        },
        mintButton: {
          borderRadius: 16,
          fontSize: "14px",
          fontWeight: 400,
          background: "transparent",
          paddingX: 10,
          _hover: {
            background: "white",
          },
          _active: {
            background: "#FFF7E3",
          },
        },
        authButton: {
          width: "100%",
          background: "transparent",
          borderRadius: 0,
          fontSize: "20px",
          fontWeight: "normal",
          padding: 8,
          fontFamily: "Sequel",
        },
        trackButton: {
          borderTop: "1px",
          borderRadius: 0,
          borderColor: "gray.icon",
          textAlign: "left",
          justifyContent: "start",
          fontWeight: 400,
          width: "100%",
          background: "transparent",
          _hover: {
            background: "gray.200",
          },
        },
      },
    },
    Heading: {
      variants: {
        rarityHeading: {
          fontSize: "md",
          fontWeight: 600,
          marginBottom: 1.5,
        },
      },
    },
    Text: {
      variants: {
        rarityText: {
          fontSize: "12px",
          fontWeight: 400,
          color: "black.body",
        },
      },
    },
    CustomMenu: {
      baseStyle: ({ colorMode }) => ({
        background: "white",
        borderRadius: "24",
        flexDir: "column",
        justifyContent: "center",
      }),
      variants: {
        customisation: () => ({
          position: "fixed",
          top: "25rem",
          left: "30rem",
          minHeight: "11rem",
          minWidth: "15rem",
          padding: 4,
          border: "1px",
          borderColor: "black",
          background: "transparent",
        }),
        rarityMenu: () => ({
          position: "fixed",
          left: 36,
          top: "12.5rem",
          width: "10.5rem",
          outlineColor: "black",
          outlineOffset: 3,
          outlineStyle: "solid",
          outlineWidth: "1px",
        }),
      },
    },
  },
});

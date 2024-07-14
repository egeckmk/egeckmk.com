import { useState, useMemo, createContext, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        gray: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#434957",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
        yellow: {
          100: "#ffffcc",
          200: "#ffff99",
          300: "#ffff66",
          400: "#ffff33",
          500: "#ffff00",
          600: "#cccc00",
          700: "#999900",
          800: "#666600",
          900: "#333300",
        },
        orange: {
          100: "#fdecce",
          200: "#fbd89d",
          300: "#f9c56d",
          400: "#f7b13c",
          500: "#f59e0b",
          600: "#c47e09",
          700: "#935f07",
          800: "#623f04",
          900: "#312002",
        },
        amber: {
          400: "#fbbf24",
        },
      }
    : {
        gray: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#101624",
          500: "#141b2d",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
        yellow: {
          100: "#333300",
          200: "#666600",
          300: "#999900",
          400: "#cccc00",
          500: "#ffff00",
          600: "#ffff33",
          700: "#ffff66",
          800: "#ffff99",
          900: "#ffffcc",
        },
        orange: {
          100: "#312002",
          200: "#623f04",
          300: "#935f07",
          400: "#c47e09",
          500: "#f59e0b",
          600: "#f7b13c",
          700: "#f9c56d",
          800: "#fbd89d",
          900: "#fdecce",
        },
        amber: {
          400: "#fbbf24",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            natural: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              // default: colors.primary[500],
              default: colors.gray[900],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            natural: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              // default: "#fcfcfc",
              default: colors.gray[900],
            },
          }),
    },
    typography: {
      fontFamilyl: ["Source Sans Serif", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamilyl: ["Source Sans Serif", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamilyl: ["Source Sans Serif", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamilyl: ["Source Sans Serif", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamilyl: ["Source Sans Serif", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamilyl: ["Source Sans Serif", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamilyl: ["Source Sans Serif", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("site-theme"))?.palette.mode || "dark"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  localStorage.setItem("site-theme", JSON.stringify(theme));

  return [theme, colorMode];
};

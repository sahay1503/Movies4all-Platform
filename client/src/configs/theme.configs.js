import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light"
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette = mode === themeModes.dark ? {
      primary: {
        main: "#00A8E1",
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#007EBB",
        contrastText: "#ffffff"
      },
      background: {
        default: "#000000",
        paper: "#131313"
      }
    } : {
      primary: {
        main: "#00A8E1"
      },
      secondary: {
        main: "#007EBB"
      },
      background: {
        default: colors.grey["100"],
      }
    };

    return createTheme({
      palette: {
        mode,
        ...customPalette
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true }
        }
      }
    });
  }
};

export default themeConfigs;

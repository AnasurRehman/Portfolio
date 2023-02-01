import { createTheme } from "@mui/material/styles";

export const fontSizes = {
  size1: "64px",
  size2: "48px",
  size3: "32px",
  size4: "18px",
  size5: "14px",
  size6: "12px",
  size7: "10px",
  size8: "24px",
};

export const colors = {
  primary: '#B1D238',
  navy: '#13212E',
  tan: '#427783',
  softBlue: '#427783',
  copperRose: '#9A6556',
  ghostWhite: '#F9F9F9',
  white: '#FFFFFF',
  vividBlue: '#0099FF',
  lightGray: '#363636',
  black: '#1D1D1D',
  mistyRose: 'FDDFDD',
  orange: '#F87323',
  apricot: '#41372F',
  darkGrey: '#323232',
  red: '#FF0000',
  grey: '#474747'
};

export const params = {
  borderRadius: 5,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.orange,
    },
    secondary: {
      main: colors.vividBlue,
    },
    info: {
      main: colors.primary,
    },
    success: {
      main: colors.primary,
    },
    neutral: {
      light: colors.grey,
      main: colors.lightGrey,
      dark: colors.darkGrey,
      contrastText: colors.black,
    },
    slate: {
      main: colors.slate,
    },
    common: { ...colors },
    text: {
      primary: colors.white,
      secondary: colors.black,
      disabled: colors.grey,
    },
    background: {
      default: colors.navy,
      paper: colors.white,
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Arial",
      "sans-serif",
    ].join(","),
    fontSize: 12,
    h1: {
      fontSize: fontSizes.size1,
      fontWeight: "700",
    },
    h2: {
      fontSize: fontSizes.size2,
      fontWeight: "700",
    },
    h3: {
      fontSize: fontSizes.size3,
      fontWeight: "500",
    },
    h4: {
      fontSize: fontSizes.size4,
      fontWeight: "700",
    },
    h5: {
      fontSize: fontSizes.size5,
      fontWeight: "700",
    },
    h6: {
      fontSize: fontSizes.size6,
      fontWeight: "400",
    },
    body1: {
      fontSize: fontSizes.size8,
      fontWeight: "400",
    },
    body2: {
      fontSize: fontSizes.size7,
    },
    button: {
      fontSize: fontSizes.size6,
      fontWeight: "700",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: params.borderRadius * 5,
          textTransform: "none",
          fontSize: 16,
          color: colors.white,
          padding: "0px 30px",
          boxShadow: "none",
          height: 49,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          '&:hover': {
            transition: '0.7s',
            backgroundColor: colors.vividBlue
          }
        },
        outlined: {
          textTransform: 'none',
          fontSize: 16,
          color: colors.orange,
          padding: "0px 30px",
          boxShadow: "none",
          height: 49,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          border: '2px solid',
          '&:hover': {
            transition: '0.7s ease',
            backgroundColor: colors.vividBlue,
            border: 'none',
            color: colors.white
          }
        }
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "7.83px",
          width: "40px",
          // backgroundColor: "#E7E7E7",
          height: "35px",
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          boxShadow: "0 0 0 #000",
          marginRight: '2rem'
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: params.borderRadius * 3,
          fontFamily: "inter",
          height: 28,
          fontWeight: 500,
          color: colors.white,
          "&.badge": {
            borderRadius: params.borderRadius * 2,
            textTransform: "uppercase",
            fontSize: fontSizes.size7,
            color: colors.white,
            fontWeight: 700,
            "&.dark": {
              color: colors.black,
            },
          },
        },
        deleteIcon: {
          fontSize: 16,
          marginRight: 8,
        },
        deleteIconColorSecondary: {
          color: colors.white,
          "&.dark": {
            color: colors.black,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: params.borderRadius * 2,
          border: `1px solid ${colors.borderGrey}`,
          boxShadow: "0px 2px 6px -2px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          padding: "15px",
          border: `1px solid ${colors.borderGrey}`,
          borderRadius: `${params.borderRadius * 3}px !important`,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "& .MuiInput-input": {
            "-webkit-text-fill-color": `${colors.black} !important`,
            padding: 0,
          },
          "&::before,&::after": {
            display: "none",
          },
          "&.Mui-disabled": {
            background: colors.backgroundGrey,
          },
        },
      },
    },

    MuiInputAdornment: {
      styleOverrides: {
        root: {
          backgroundColor: colors.white,
          marginLeft: 8,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1320px !important',
          paddingLeft: '0px !important',
          paddingRight: '0px !important',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: fontSizes.size4,
          fontWeight: 700,
          color: colors.black,
        },
      },
    },
  },
});
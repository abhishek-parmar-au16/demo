import { createTheme } from '@mui/material/styles'


const Theme = createTheme({
    palette: {
        primary: { main: "#afd557" },
        secondary: { main: "#000000" },
        text: { primary: "#000000", secondary: "#ffffff" }
    },
    typography: {
        fontFamily: ["DM Sans", "sans-serif"].join(', '),
        h2: {
            fontSize: "4.375rem",
            lineHeight: "4.375rem",
            fontWeight: 400
        },
        h3: {
            fontSize: "2.5rem",
            lineHeight: "3.125rem"
        },
        h4: {
            fontSize: "1.5rem",
            lineHeight: "1.6875rem"
        },
        body1: {
            fontSize: "1rem",
            lineHeight: "1.6875rem",
            fontWeight: 400
        },
        body2: {
            fontSize: "0.875rem",
            lineHeight: "1rem",
            fontWeight: 400
        }
    }
})

export default Theme;
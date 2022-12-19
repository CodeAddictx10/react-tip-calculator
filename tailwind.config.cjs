/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1.5rem",
                // sm: "2rem",
                // lg: "4rem",
                // xl: "5rem",
                // "2xl": "6rem",
            },
        },
        screens: {
            sm: "375px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        colors: {
            primary: "hsl(172, 67%, 45%)",
            secondary: "#c5e4e7",
            "very-dark-cyan": "hsl(183, 100%, 15%)",
            "dark-grayish-cyan": "hsl(186, 14%, 43%)",
            "light-grayish-cyan": "hsl(184, 14%, 56%)",
            "lighter-grayish-cyan": "hsl(189, 41%, 97%)",
            white: "hsl(0, 0%, 100%)",
            invalid: "#ef4444",
        },
        extend: {},
    },
    plugins: [],
};

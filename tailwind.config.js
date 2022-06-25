module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontWeight: {
            regular: "600",
            semibold: "700",
            bold: "900",
        },

        colors: {
            softRed: "hsl(7, 99%, 70%)",
            yellow: "hsl(51, 100%, 49%)",
            darkCyan: "hsl(167, 40%, 24%)",
            darkBlue: "hsl(198, 62%, 26%)",
            moderateCyan: "hsl(168, 34%, 41%)",
            veryDarkBlue: "hsl(212, 27%, 19%)",
            darkGrayBlue: "hsl(213, 9%, 39%)",
            grayBlue: "hsl(210, 4%, 67%)",
            white: "hsl(0, 0%, 100%)",
        },

        fontFamily: {
            Barlow: ["Barlow", "sans-serif"],
            Fraunces: ["Fraunces", "serif"],
        },
        screens: {
            mobile: "375px",
            desktop: "1440px",
        },

        extend: {
            backgroundImage: {
                logoMobile: "url('./src/assets/images/mobile/image-header.jpg')",
                logoDesktop: "url('./src/assets/images/desktop/image-header.jpg')",
            },
        },
    },
    plugins: [],
};

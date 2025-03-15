import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                'app-primary': "#3751FF",
                'app-light-blue': "#DDE2FF",
                'app-dark-gray': "#363740",
                'app-darker-gray': "#252733",
                'app-dark-blue': "#101828",
                "app-dark-gray-200": "#344054",
                "app-dark-gray-100": "#D0D5DD",
                'app-gray-text': "#A4A6B3",
                "app-gray-text-100": "#667085",
                'app-gray-muted': "#9FA2B4",
                'app-purple': "#7F56D9",
                'app-light-purple': "#F4EBFF",
                'app-light-gray': "#F0F1F7",
                'app-light-stone': "#DFE0EB",
            },
        },
    },
    plugins: [],
};

export default config;
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#312f38',
                secondary: '#f7f6f7',
                tertiary: '#fdffff',
                contrast: '#e73c37',
            },
            maxWidth: {
                desktop: '1920px',
            },
        },
    },
    plugins: [],
};
export default config;

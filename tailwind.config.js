/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': 'hsl(180, 29%, 50%)',
                'background': 'hsl(180, 52%, 96%)',
                'light-grayish-cyan-bg': 'hsl(180, 31%, 95%)',
                'dark-grayish': 'hsl(180, 8%, 52%)',
                'very-dark-cyan': 'hsl(180, 14%, 20%)',
            },
            borderWidth: {
                '5': '5px',
            },
        },
    },
    plugins: [],
}

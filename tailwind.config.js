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
                'filterTabs': 'hsl(180, 31%, 95%)',
                'darkGrayish': 'hsl(180, 8%, 52%)',
                'veryDarkGrayish': 'hsl(180, 14%, 20%)',
            },
        },
    },
    plugins: [],
}

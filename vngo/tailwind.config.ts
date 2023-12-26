/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                /* basic */
                main: '#1172dd',
                primary: '#4093ee',
                secondary: '#145399',
                /* line */
                'dark-line': '#b6c5db',
                'secondary-line': '#aaaaaa',
                'strong-line': '#bbbbbb',
                line: '#cccccc',
                'light-line': '#dddddd',
                /* danger */
                danger: '#f32013',
                'danger-hover': '#ca0b00',
                /* background */
                foreground: '0, 0, 0',
                'background-start': '#e1eaf4',
                'background-primary': '#ecf6ff',
                'background-secondary': '#e8ebef',
                'background-low-end': '#eff3f8',
                'background-end': '#f9fbfd',
                /* For text */
                'gray-100': '#000000',
                'gray-80': '#333333',
                'gray-70': '#555555',
                'gray-40': '#999999',
                'gray-30': '#bfbfbf',
                'gray-20': '#cccccc',
                'gray-10': '#e5e5e5',
                'gray-0': '#ffffff',
            },
        },
    },
    plugins: [],
};

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
            fonts: [
                // Display heading
                bunny('Archivo Black', {
                    alias: 'krb-display',
                    variable: '--krb-font-display',
                    weights: [400],
                    fallbacks: ['Arial Black', 'Impact', 'sans-serif'],
                    optimizedFallbacks: false,
                }),
                // Handwritten accent
                bunny('Kalam', {
                    alias: 'krb-hand',
                    variable: '--krb-font-hand',
                    weights: [700],
                    fallbacks: ['cursive'],
                    optimizedFallbacks: false,
                }),
                // Body & UI
                bunny('Plus Jakarta Sans', {
                    alias: 'krb-body',
                    variable: '--krb-font-body',
                    weights: [400, 500, 600, 700, 800],
                    preload: [{ weight: 400 }, { weight: 700 }],
                    fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
                    optimizedFallbacks: false,
                }),
            ],
        }),
        react(),
        tailwindcss(),
    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});

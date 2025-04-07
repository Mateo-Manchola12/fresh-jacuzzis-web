import { defineConfig } from "astro/config";
import htaccess from "astro-htaccess";
import sitemap from "@astrojs/sitemap";
import { DOMAIN_NAME } from "./src/constants";
export default defineConfig({
    site: DOMAIN_NAME,
    vite: {
        server: {
            allowedHosts: true, // Permite todos los hosts (ngrok incluido)
        },
    },

    integrations: [
        htaccess({
            generateHtaccessFile: true,
            errorPages: [{ code: 404, document: "/404" }],
            customRules: [
                `ExpiresByType image/jpg "access plus 1 year"`,
                `ExpiresByType image/jpeg "access plus 1 year"`,
                `ExpiresByType image/png "access plus 1 year"`,
                `ExpiresByType image/gif "access plus 1 year"`,
                `ExpiresByType image/avif "access plus 1 year"`,
                `ExpiresByType text/css "access plus 1 month"`,
                `ExpiresByType application/javascript "access plus 1 month"`,
                `ExpiresByType text/javascript "access plus 1 month"`,
                `ExpiresByType application/font-woff2 "access plus 1 year"`,
                `ExpiresByType application/font-woff "access plus 1 year"`,
                `ExpiresByType font/woff2 "access plus 1 year"`,
                `Header unset ETag`,
                `FileETag None`,
                `Header set Cache-Control "public, max-age=31536000, immutable"`,
                `RewriteCond %{HTTP_HOST} ^www\\.freshjacuzzis\\.com [NC]`,
                `RewriteRule ^(.*)$ https://freshjacuzzis.com/$1 [L,R=301]`,
            ],
        }),
        sitemap(),
    ],
});

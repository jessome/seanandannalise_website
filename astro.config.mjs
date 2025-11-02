import { defineConfig } from "astro/config";

export default defineConfig({
  server: {
    headers: {
      //"Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Resource-Policy": "cross-origin",
      "Content-Security-Policy":
        "default-src * https://sean-and-annalise.ca/; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' https://sean-and-annalise.ca data:",
      "Permissions-Policy": "geolocation=(), camera=(), microphone=()",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Upgrade-Insecure-Requests": "1",
      //"X-Content-Type-Options": "nosniff",
      //"X-Frame-Options": "DENY",
    },
  },
  site: "https://sean-and-annalise.ca/",
});

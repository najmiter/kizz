import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { eslint } from "eslint-plugin-react";

export default defineConfig({
    base: "/kizz/",
    plugins: [react()],
});

import Path from "path"
import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), svgr()],
    resolve: {
        alias: {
            "@app": Path.resolve(__dirname, "src"),
            "@components": Path.resolve(__dirname, "src/components"),
            "@hooks": Path.resolve(__dirname, "src/hooks"),
            "@views": Path.resolve(__dirname, "src/views"),
            "@styles": Path.resolve(__dirname, "src/styles"),
        },
    },
})

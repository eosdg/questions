import pluginJson from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
    input: "index.js",
    output: {
        file: 'dist/bundle.js',
        format: 'es'
    },
    plugins: [
        pluginJson(),
	terser()
    ]
}

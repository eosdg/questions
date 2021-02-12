import pluginJson from "@rollup/plugin-json";
import {terser} from "rollup-plugin-terser";

export default {
    input: "index.ts",
    output: {
        file: 'testDist/bundle.js',
        format: 'commonjs',
        exports: 'default'
    },
    plugins: [
        pluginJson(),
        terser()
    ]
}

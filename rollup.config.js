import pluginJson from "@rollup/plugin-json";
import {terser} from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';

export default {
    input: "index.ts",
    output: {
        file: 'lib/esm/bundle.js',
        format: 'es'
    },
    plugins: [
        pluginJson(),
        terser(),
        typescript({tsconfig: "tsconfig.json"})
    ]
}

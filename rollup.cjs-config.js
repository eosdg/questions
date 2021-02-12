import pluginJson from "@rollup/plugin-json";
import {terser} from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';

export default {
    input: "index.ts",
    output: {
        file: 'lib/cjs/bundle.js',
        format: 'cjs'
    },
    plugins: [
        pluginJson(),
        terser(),
        typescript({tsconfig: "tsconfig-cjs.json"})
    ]
}

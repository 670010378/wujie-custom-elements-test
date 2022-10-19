/* eslint-disable prettier/prettier */
import del from "rollup-plugin-delete";
import path from "path";
import rollupPluginPostcss from "rollup-plugin-postcss";
import rollupPluginVirtual from "@rollup/plugin-virtual";
import rollupPluginTypescript from "rollup-plugin-typescript2";
import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve as rollupPluginNodeResolve } from "@rollup/plugin-node-resolve";

const pkg = require("./package.json");
const production = process.env.NODE_ENV === "production";

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/main/index.js",
      name: "main",
      format: "umd",
      sourcemap: !production,
    },
  ],
  plugins: [
    commonjs(),
    del({
      force: true,
      targets: [path.join(__dirname, "dist/main")],
    }),
    rollupPluginPostcss({
      minimize: production,
    }),
    rollupPluginVirtual({
      "#version": `export default '${pkg.version}';`,
    }),
    rollupPluginTypescript({
      tsconfig: "tsconfig.json",
    }),
    rollupPluginNodeResolve(),
  ],
};

export default options;

/* eslint-disable prettier/prettier */
import del from "rollup-plugin-delete";
import path from "path";
import rollupPluginPostcss from "rollup-plugin-postcss";
import rollupPluginTypescript from "rollup-plugin-typescript2";
import { nodeResolve as rollupPluginNodeResolve } from "@rollup/plugin-node-resolve";

const production = process.env.NODE_ENV === "production";

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: "src/index.ts",
  output: [
    {
      // file: "../main/dist/app1/app1.js",
      file: "dist/app1.js",
      name: "app1",
      format: "umd",
      sourcemap: !production,
    },
  ],
  plugins: [
    del({
      force: true,
      targets: [path.join(__dirname, "dist")],
      // targets: [path.join(__dirname, "dist/app1")],
    }),
    rollupPluginPostcss({
      minimize: production,
    }),
    rollupPluginTypescript({
      tsconfig: "tsconfig.json",
    }),
    rollupPluginNodeResolve(),
  ],
};

export default options;

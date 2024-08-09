import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  external: ["react"],
  dts: true,
  clean: true,
  sourcemap: false,
  splitting: false,
  outDir: "./dist",
  // Code below is Experimental for handling path alias

  // entry: ["src/components/**/*.tsx"],
  // import Card from "@ikuretechsoft/uikit/lib/card";

  tsconfig: "./tsconfig.json",
  // loader: {
  //         ".jpg": "base64",
  //         ".png": "file",
  // },
  // esbuildOptions(options) {
  //         options.entryPoints = ["src/utils/index.ts", "src/components/index.ts", "src/types/index.ts"];
  //         options.alias = {
  //                 "@/*": "../../assets/*",
  //         };
  //         options.resolveExtensions = [".png"];
  // },
});

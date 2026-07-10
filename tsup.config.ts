import { defineConfig } from "tsup";

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    splitting: false,
    sourcemap: true,
    clean: true,
    outDir: "dist",
    target: "esnext",
    dts: {
        compilerOptions: {
            "ignoreDeprecations": "6.0"
        }
    },
});
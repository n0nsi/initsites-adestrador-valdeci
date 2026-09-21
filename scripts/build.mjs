import { rm, cp, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
const src = new URL("../public/", import.meta.url);
const out = new URL("../dist/", import.meta.url);
if (!existsSync(src)) throw new Error("public/ não encontrado");
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(src, out, { recursive: true });
console.log("Build concluído: public/ -> dist/");

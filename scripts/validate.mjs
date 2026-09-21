import { readFile, access } from "node:fs/promises";
const required=["dist/index.html","dist/404.html","dist/robots.txt","dist/sitemap.xml","dist/assets/css/style.css","dist/assets/js/main.js","dist/assets/brand/logo.svg","dist/assets/images/hero.svg"];
for(const p of required){await access(p)}
const html=await readFile("dist/index.html","utf8");
for(const token of ["<title>","meta name=\"description\"","noindex,nofollow","application/ld+json","Site demonstrativo desenvolvido pela"]){if(!html.includes(token))throw new Error(`Falta: ${token}`)}
if(/href=\"#\"/.test(html)) throw new Error("Link # vazio detectado");
console.log("Validação estática OK");

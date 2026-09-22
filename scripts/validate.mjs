import { readFile, access } from "node:fs/promises";
const required=["dist/index.html","dist/404.html","dist/robots.txt","dist/sitemap.xml","dist/assets/css/style.css","dist/assets/js/main.js","dist/assets/brand/logo.svg","dist/assets/images/hero.svg"];
for(const p of required){await access(p)}
const html=await readFile("dist/index.html","utf8");
for(const token of ["<title>","meta name=\"description\"","noindex,nofollow","application/ld+json","Site demonstrativo desenvolvido pela"]){if(!html.includes(token))throw new Error(`Falta: ${token}`)}
if(/href=\"#\"/.test(html)) throw new Error("Link # vazio detectado");
console.log("Validação estática OK");
// Publication and interaction invariants for the static redesign.
const { readdir } = await import('node:fs/promises');
const { resolve, extname } = await import('node:path');
const files=[];
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){const f=`${dir}/${e.name}`;if(e.isDirectory())await walk(f);else files.push(f)}}
await walk('dist');
if((html.match(/<h1\b/g)||[]).length!==1)throw new Error('Expected one H1');
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
for(const [,ref] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
 if(ref.startsWith('#')){if(!ids.has(ref.slice(1)))throw new Error(`Missing anchor ${ref}`)}
 else if(ref.startsWith('/')&&!ref.startsWith('//'))await access(resolve('dist',ref.slice(1)||'index.html'));
}
for(const f of files){if(/(?:^|\/)(?:\.git|\.env[^/]*|node_modules|\.wrangler)(?:\/|$)/.test(f))throw new Error(`Private path: ${f}`)}
const js=await readFile('dist/assets/js/main.js','utf8');
if(Buffer.byteLength(js)>40000)throw new Error('JavaScript budget exceeded');
if(!js.includes('prefers-reduced-motion'))throw new Error('Reduced motion must be respected');
const robots=await readFile('dist/robots.txt','utf8');
if(!/Disallow:\s*\//.test(robots))throw new Error('Demo indexing protection missing');
JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
const headers=await readFile('dist/_headers','utf8');
if(!headers.includes("frame-ancestors 'none'")||!headers.includes('X-Robots-Tag: noindex, nofollow'))throw new Error('Security headers missing');
console.log(`Redesign checked: ${files.length} static files, anchors, structured data, motion and JS budget.`);

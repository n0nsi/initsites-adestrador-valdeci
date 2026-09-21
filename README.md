# Adestrador Valdeci — demonstração InitSites

Landing page estática **não oficial** preparada para demonstração comercial.

## Objetivo

Mostrar como Adestrador Valdeci poderia se apresentar profissionalmente na internet usando apenas informações públicas confirmadas.

## Stack

- HTML5
- CSS3
- JavaScript vanilla
- Node.js apenas para build/validação
- Cloudflare Workers + Static Assets
- Wrangler
- sem banco, CMS, SSR ou backend

## Estrutura

```text
public/
  index.html
  404.html
  robots.txt
  sitemap.xml
  assets/
    brand/
    images/
    icons/
    css/
    js/
scripts/
  build.mjs
  validate.mjs
research.md
package.json
wrangler.jsonc
```

## Identidade visual

Identidade visual conceitual criada exclusivamente para demonstração. Não foi localizado um arquivo oficial de logotipo com origem suficientemente confiável para redistribuição no projeto.

## Origem das imagens

O projeto usa ilustrações SVG originais e neutras do segmento. Nenhuma foto de outro estabelecimento foi usada. Consulte `research.md`.

## Rodar localmente

```bash
npm install
npm run build
npx wrangler dev --local
```

## Build

```bash
npm run build
```

Saída: `./dist`

## Validar

```bash
npm run validate
npm run quality
```

## Deploy

```bash
npm run deploy
```

Worker sugerido: `initsites-adestrador-valdeci`

## Cloudflare

`wrangler.jsonc` usa Static Assets apontando para `./dist`.

A demonstração nasce com `noindex,nofollow` e `robots.txt` bloqueando indexação, porque não é um site oficial autorizado. **Somente após aprovação do cliente** altere SEO para indexação pública, domínio e sitemap definitivos.

## Fontes públicas utilizadas

Veja `research.md` para URLs, dados confirmados e divergências.

## Informações a confirmar com o cliente

- telefone e WhatsApp definitivos;
- horários atuais;
- lista final de serviços/produtos;
- domínio oficial;
- logo em alta resolução;
- fotos oficiais e autorização de uso;
- redes sociais oficiais;
- texto institucional;
- política de privacidade/termos, se aplicável;
- remoção do aviso de demonstração após contratação/autorização.

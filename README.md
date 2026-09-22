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

## Redesign editorial v2

Hero com ilustração SVG original de um cão, identidade tipográfica conceitual e reputação pública datada. Navegação móvel acessível, seleção de assunto com mensagem contextual de WhatsApp, CTA móvel e transições com respeito a `prefers-reduced-motion`. Nenhuma fonte, biblioteca ou serviço externo é necessário para renderizar a página.

A seção de primeiros passos orienta a conversa inicial; não apresenta um método de treinamento, garantia ou certificação do profissional. Não foram adicionados depoimentos nem alegações de resultados.

`public/_headers` aplica CSP restritiva, proteção contra enquadramento, política de referência e `noindex,nofollow`. Build e `npm run quality` verificam estrutura, assets, âncoras, JSON-LD, proteções da demonstração e orçamento de JavaScript. O deploy continua no Worker original, exclusivamente com Static Assets.

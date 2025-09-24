    # linkedin-cv-fixed


    Correções aplicadas para deploy no GitHub Pages (project site `username.github.io/github-page`):


    - `vite.config.js` base configurado para `/github-page/`
    - `package.json` com `homepage` apontando para https://allynems.github.io/github-page
    - Dependências adicionadas: jspdf + html2canvas para exportar PDF

Usage:

1. Replace `allynems`/`github-page` if different.
2. Install deps: `npm install`
3. Deploy (using gh-pages): `npm run deploy`
   - or configure GitHub Actions to publish `dist/` to GitHub Pages

Note: If you are using React Router, set `<BrowserRouter basename="/github-page" />`

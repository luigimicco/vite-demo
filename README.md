# vite-demo: Vite + React + GitHub Pages

Mini progetto didattico per mostrare **come pubblicare una web app frontend su GitHub Pages**.

## Prerequisiti

- Account GitHub.
- Node.js + npm installati.
- Git. 

## Come usare questa repo

1. **Crea il tuo repository**
   - Crea un repo nuovo su GitHub (es. `vite-demo`).
   - Clona il repo nel tuo computer:
     ```bash
     git clone https://github.com/tuonome/vite-demo.git
     cd vite-demo
     ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Verifica in locale**
   ```bash
   npm run dev
   ```
   Apri `http://localhost:5173`.

4. **Configura `vite.config.js`**
   Assicurati che `base` sia uguale al nome del tuo repo, es:
   ```js
   base: '/vite-demo/',
   ```

5. **Crea il commit e il push**
   ```bash
   git add .
   git commit -m "feat: first commit"
   git branch -M main
   git remote add origin https://github.com/tuonome/vite-demo.git
   git push -u origin main
   ```

6. **Attiva GitHub Pages**
   - Vai su GitHub → `Settings` → `Pages`.
   - Sezione `Source` → scegli `GitHub Actions`.

7. **Attendi il deploy**
   - GitHub Actions costruisce il progetto (`npm run build`) e lo pubblica.
   - Al termine vedrai l’URL sotto `Pages`, ad esempio:
     ```
     https://tuonome.github.io/vite-demo/
     ```

## Checklist

- Repository pubblico e aggiornato.
- `vite.config.js` con `base` corretto.
- Workflow GitHub Actions attivo.
- `npm run build` genera la cartella `dist`.
- URL funzionante anche in navigazione in incognito o su un altro dispositivo.



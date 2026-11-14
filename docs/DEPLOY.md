# Taking the site live

Plan: **GitHub** keeps the code and history, **Cloudflare Pages** (or Netlify) hosts it for free and rebuilds on
every save, **Porkbun** points your domain at it. Total hosting cost: the domain only.

## 1. Put the project on GitHub
1. Create a free account at github.com and a new **private or public** repository, for example `nubs-legon-website`. Do not add a README there.
2. In VS Code open the project folder, then the terminal:
```bash
git init
git add .
git commit -m "First version of the NUBS Legon website"
git branch -M main
git remote add origin https://github.com/YOUR-NAME/nubs-legon-website.git
git push -u origin main
```
The book PDFs make the repo about 30 MB. That is fine for GitHub.

## 2. Host it (pick one)

### Cloudflare Pages
1. dash.cloudflare.com > Workers & Pages > Create > Pages > Connect to Git, pick the repo.
2. Framework preset: **None**. Build command: leave empty. Build output directory: `/` (or `.`).
3. Save and Deploy. You get a `something.pages.dev` address within a minute.

### Netlify
1. app.netlify.com > Add new site > Import from Git, pick the repo.
2. Build command empty, publish directory `.` (already set in `netlify.toml`). Deploy.

## 3. Connect the Porkbun domain
Easiest: use the host's own DNS, then Porkbun only needs one change.
1. In the host (Pages: Custom domains > Set up a domain; Netlify: Domain management > Add domain), type your domain. Follow the steps it shows.
2. Either:
   - **Nameservers (simplest on Cloudflare):** add the domain to Cloudflare, copy the two nameservers it gives you, then in Porkbun > Domain Management > Authoritative Nameservers replace the existing ones. Done.
   - **Keep Porkbun DNS:** in Porkbun > DNS, delete the default parking records, then add the records the host shows (usually a `CNAME` for `www` and an `ALIAS`/`CNAME` for the bare domain pointing to the host address).
3. Wait 10 minutes to a few hours. HTTPS is switched on automatically. Make sure "Always use HTTPS" is on.

## 4. After the domain works (already done for nubslegon.com)
The site already contains these, set for nubslegon.com. If you ever change domain, update them:
- `<link rel="canonical">` and an absolute `og:image` so WhatsApp and Google previews show the hero picture.
- `sitemap.xml` and the `Sitemap:` line in `robots.txt`.

## 5. Day to day
```bash
# edit files, check on Live Server, then:
git add .
git commit -m "Add December events"
git push
```
The site updates itself within about a minute.

**Undo a mistake:** on GitHub open the bad commit and click Revert, or in your host open Deployments and
roll back to the previous version. Nothing is lost.

## Checklist before launch
- [ ] Every phone number and WhatsApp link tested on your own phone
- [ ] Email `nubslegon080@gmail.com` correct
- [ ] Books open and download
- [ ] Site looks right on a phone and on a laptop
- [ ] Past events removed or left to hide themselves
- [ ] Domain shows the padlock (HTTPS)

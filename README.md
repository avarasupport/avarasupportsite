# Avara Support — Static Website

This repository contains a simple static site for Avara Support built with Tailwind CSS (via CDN). Files provided:

- `index.html` — the full landing page HTML (Tailwind + Google fonts via CDN).
- `CNAME` — contains the custom domain `avarasupport.co.uk`.
- `.github/workflows/pages.yml` — GitHub Actions workflow to deploy to GitHub Pages automatically on push.

What I changed/added
- Cleaned up text and small typos.
- Added a meta description.
- Added a `CNAME` file so GitHub Pages can serve the site from avarasupport.co.uk.
- Included a GitHub Pages Actions workflow to deploy the site automatically.

Quick publish options (pick one)

A) GitHub Pages (recommended for a simple static site)
1. Create a GitHub repository (e.g. `avarasupport-site`) and push these files to the `main` branch.
2. Make sure `CNAME` with `avarasupport.co.uk` is at repository root (provided).
3. The workflow at `.github/workflows/pages.yml` will publish the site to GitHub Pages automatically on push.
4. In your domain registrar's DNS settings, add the following A records for the root (apex) domain `avarasupport.co.uk`:

   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

   And add a CNAME for `www`:
   - Host: `www` -> CNAME -> `your-github-username.github.io` or point `www` CNAME to the apex (`avarasupport.co.uk`) depending on your registrar.

5. In the repository Settings → Pages, confirm the custom domain is `avarasupport.co.uk` (it will usually be set automatically from the `CNAME` file). Enable "Enforce HTTPS" once the TLS certificate is issued (this can take a few minutes to hours).

Notes for the registrar:
- Set the TTL to 3600 (1 hour) or as your registrar requires.
- If your registrar supports ALIAS/ANAME records for apex domains, you can use those instead of multiple A records, but the four A records above are standard for GitHub Pages.
- It can take up to 48 hours for DNS to propagate globally, but usually much faster.

B) Netlify or Vercel (alternative — both provide automatic SSL and easier domain linking)
- Create an account at Netlify/Vercel.
- Link your GitHub repository.
- Configure the custom domain in their dashboard and follow the provided DNS instructions (they give exact values and will enable HTTPS automatically).
- These services can be simpler for non-technical domain setups.

If you want me to:
- Push these files to a new repo for you, tell me the repository owner/name (format `owner/repo`) and confirm.
- Or, if you give me repo details I can open a PR or push to a branch. I will need explicit permission/confirmation before I push.

If you want changes (logo, text edits, different images, contact form backend integration), tell me what to update and I’ll adjust the files.

# Ibrahim Adeshina, portfolio

Personal portfolio site built with [Astro](https://astro.build). It's static HTML and CSS with two small scripts and no UI framework, hosted on Cloudflare.

## Run it locally

You need Node.js 22 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-checks, then builds to dist/
npm run preview    # serves the built site
```

## Where things live

| What | Where |
| --- | --- |
| Name, headline, intro, facts, about text, experience, contact links | `src/site.config.ts` |
| Projects (one Markdown file each) | `src/content/projects/*.md` |
| Project fields and what they do | `src/content.config.ts` |
| CV | `public/Ibrahim_Adeshina_CV.pdf` |
| Photo | `src/assets/portrait.jpg` |
| Colours, fonts, spacing | top of `src/styles/global.css` |
| Interactive project demos | `src/components/demos/` |
| Share-preview image (1200×630) | `public/og.png` |
| Your domain | `site` in `astro.config.mjs` |

## Everyday changes

**Add a project.** Copy one of the files in `src/content/projects/`, rename it (the file name becomes the URL slug) and edit the frontmatter. `order` sets its position, with lower numbers first.

**Change the featured project.** Move `featured: true` to the other project's file and remove it from the old one. The featured layout uses `description`, `highlights`, `evidence` and `demo` if they're present, and skips any that aren't.

**Write a case study.** Add Markdown below the frontmatter (the closing `---`) of a project file. A page appears at `/projects/<file-name>/` and a "Read the case study" link shows up on the homepage. If there's no text below the frontmatter, there's no page and no link.

**Update your CV.** Replace `public/Ibrahim_Adeshina_CV.pdf` with a file of the same name. If you change the name, update `cv` in `src/site.config.ts`.

**Add a live demo link.** Set `links.demo` in the project's frontmatter.

**Edit from your phone.** Open the file on github.com, click the pencil icon, edit and commit. Cloudflare rebuilds the site automatically.

## Deploy

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/IbraCoded/portfolio.git
git push -u origin main
```

Create the empty `portfolio` repo on GitHub first. It's fine to make it public, since the repo itself is a code sample.

### 2. Connect Cloudflare

1. Sign in to the Cloudflare dashboard and open **Workers & Pages**.
2. Create an application, choose **Pages**, then **Connect to Git**, and pick the `portfolio` repo.
3. Set the framework preset to **Astro**, the build command to `npm run build`, and the output directory to `dist`.
4. If the build complains about the Node version, add an environment variable `NODE_VERSION` with the value `22`.
5. Deploy. You'll get a `*.pages.dev` address to check.

From then on, every push to `main` deploys automatically, and every pull request gets its own preview link.

### 3. Use your own domain

1. In Cloudflare, **add your domain** as a site. The free plan is enough.
2. Cloudflare shows you two nameservers. At the registrar where you bought the domain, replace the existing nameservers with those two. This can take from a few minutes to a few hours to take effect.
3. In your Pages project, go to **Custom domains**, then add `yourdomain.com` and `www.yourdomain.com`. HTTPS is set up automatically.
4. Set `site` in `astro.config.mjs` to your domain and push.

### 4. Optional extras, both free

- **Email on your domain.** Cloudflare **Email Routing** can forward `ibrahim@yourdomain.com` to your Gmail. Then change `email` in `src/site.config.ts`.
- **Visitor stats.** Turn on **Web Analytics** for the Pages project. It doesn't use cookies, so you don't need a cookie banner.

## Live demos on your VPS

Keep the main site on Cloudflare and run project demos on your VPS (with Coolify, for example) under subdomains such as `ledger.yourdomain.com`. In Cloudflare DNS, add an `A` record for each subdomain pointing at the VPS's IP address. Then set `links.demo` in the project file.

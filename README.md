# Dr Swati Virmani — website

A hand-built static site. No build step, no framework, no dependencies. Every page is
plain HTML sharing one stylesheet, so you can edit it in any text editor and see the
change by refreshing the browser.

## Before you publish — one thing left

**Your CV.** Drop the PDF into `assets/cv/` named exactly `Swati-Virmani-CV.pdf`.
The download button on `contact.html` already points there. Then delete
`assets/cv/PUT-YOUR-CV-PDF-HERE.txt`.

Contact details and the domain (`https://swativirmani.co.uk`) are already in from
your August 2026 CV. Your phone number is deliberately **not** on the site — a
personal mobile on a public page attracts spam. Add it to `contact.html` if you
want it there.

## Structure

```
index.html          Home — background, research interests, frameworks, projects,
                    publications, speaking, and "working with me"
research.html       The five research projects in full
publications.html   Grouped: books & chapters / journal articles / reports
teaching.html       Teaching philosophy, Academic Innovation project, frameworks
speaking.html       Talks, writing, podcasts
contact.html        Contact routes and what you can be approached about
404.html            Not-found page (keeps people on the site)

assets/css/style.css   All styling. Design tokens are at the top under `:root`.
assets/js/site.js      Mobile menu toggle only.
assets/img/            All images, renamed descriptively and resized.
assets/cv/             Put your CV PDF here.
```

## Editing

**Change a colour or font.** Everything lives in the `:root` block at the top of
`assets/css/style.css`. Change `--accent` and the whole site follows.

**Add a talk.** Copy an existing `<li class="entry">` block in `speaking.html` and
edit the date, title, host and note. Newest goes at the top.

**Add a publication.** Copy an `<li>` inside the relevant `.pub-group` in
`publications.html`. The `<span class="pub-year">` sits in the left margin
automatically.

**Add a project.** Copy an `<article class="project">` block in `research.html`.
Add `project--flip` to the class to put the image on the left instead of the right.
Also add a matching card to the `.card-grid` on `index.html`.

**Add an image.** Put it in `assets/img/`, keep it under about 1400px on its longest
side, and always write an `alt` description. Set `width` and `height` attributes to
the real pixel dimensions so the page doesn't jump while loading.

## Hosting

It's a folder of static files, so anything works. Upload the whole folder to
GitHub Pages, Netlify, Cloudflare Pages, or standard web hosting. There is no
server-side code and nothing to install.

To preview locally:

```bash
cd "/Users/swativirmani/Desktop/SV Website" && python3 -m http.server 8123
```

Then open <http://localhost:8123>.

## What was built in

- Navigation in the header of **every** page (the old WordPress site only had a menu
  on the homepage — every other page was a dead end).
- Descriptive `alt` text on all images, including the framework diagrams, whose
  content previously existed nowhere in text.
- Heading levels that run in order with a single `<h1>` per page.
- Text measure capped at roughly 60 characters per line.
- Colour contrast at WCAG AA or better throughout.
- A 46×46px mobile menu button (44px is the accessibility minimum).
- `Person` structured data on the homepage for search engines.
- Descriptive page titles, meta descriptions and social share cards.
- Lazy loading on below-the-fold images.

## Redirects from the old WordPress site

Old addresses are forwarded to the right page here, so existing links, bookmarks
and Google results keep working.

| Old WordPress address | Goes to |
|---|---|
| `/2024/05/19/hello-world/` | `/` |
| `/most-recent-publications/` | `/publications.html` |
| `/current-research-projects/` | `/research.html` |
| `/blogs-media-stories/` | `/speaking.html` |
| `/__trashed-2/` | `/teaching.html` |
| `/scholarship-of-teaching-learning/` | `/teaching.html` |
| `/?page_id=67` | `/publications.html` |
| `/?page_id=84` | `/research.html` |
| `/?page_id=101` | `/teaching.html` |
| `/?page_id=137` | `/speaking.html` |

**How it works on GitHub Pages** (which is where this site is hosted). GitHub
Pages has no server-side redirect feature, so each old path is a small folder
containing an `index.html` that forwards. Each one carries a
`<link rel="canonical">` pointing at the new page, which is how Google transfers
the old page's search ranking across.

The `?page_id=` addresses are different: no static host can match a query string,
so those requests land on the homepage. A short script in the `<head>` of
`index.html` spots `page_id` and forwards. Remove that script and those four
links stop working.

`.nojekyll` must stay. GitHub Pages runs Jekyll by default, and Jekyll refuses to
publish any folder whose name starts with an underscore — without it,
`/__trashed-2/` would silently 404.

**If you ever move host.** Two config files are included and ready:

- `_redirects` — Netlify and Cloudflare Pages. Proper 301s, and it handles the
  `?page_id=` addresses server-side.
- `.htaccess` — Apache / cPanel / most traditional hosting.

Both are ignored by GitHub Pages, so they sit there harmlessly until needed. On
Netlify or Cloudflare you could then delete the six stub folders, though leaving
them does no harm.

### One thing these files cannot do

They only work for addresses on **your** domain. If somebody has
`swativirmanicouk.wordpress.com/most-recent-publications/` bookmarked, that
request never reaches this site — it goes to WordPress.com.

To catch those you need WordPress.com's paid **Site Redirect** upgrade on the old
site, pointed at `swativirmani.co.uk`. It preserves the path, so the chain
becomes: old WordPress address → the same path on your domain → the stub here →
the right page. Without it, the old wordpress.com links keep showing the old site
for as long as you leave it up.

## Content note

Two items to check when you have a moment:

- `publications.html` — the MedicSpot report lists a co-author as
  "Caredenas, R. M.", spelled that way in both the old site and your CV. Worth
  confirming.
- `speaking.html` — the 2020 JISC member story "CPD isn't just good business sense"
  has no link. If you can find the URL, wrap the title in an `<a href="...">`.

## Updated from your CV (August 2026)

- **National Teaching Fellow (NTF)** throughout — post-nominals in the hero, first
  chip in the credentials strip, first item under Recognition, and in the page
  title and search description.
- New awards: GSA Social Programme of the Year 2025, Faculty Rising Star 2020,
  Student Choice nominations.
- New professional roles: Associate Editor of the *International Journal of
  Organizational Analysis*, Economics Network Associate, Advance HE mentor and
  assessor.
- Full education history, including the Alan Turing Institute Data Science and AI
  Educators' Programme.
- Eight strategic leadership areas, EDGE, the London Career Development Service
  and the Global Cities MBA.
- New homepage sections: **funded projects and grants** (£88k+ across seven awards)
  and **partners**.
- Six additional talks, including the HM Treasury Government Economic Service
  seminar and the UCL / Royal Economic Society workshop.
- Doctoral supervisions, and further research strands (AI safety, carbon literacy
  tooling, JISC student digital experience, data-tool literacy with Leicester City
  Council).
- Publication links: Kogan Page listing and the Wiley chapter DOI.

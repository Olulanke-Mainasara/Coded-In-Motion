# Coded-In-Motion

A monorepo project built with **Next.js** (frontend) and **Sanity Studio** (content management).  
Both live in the same repository, with Sanity Studio embedded directly inside Next.js at `/studio`.

---

## 📂 Project Structure

```

Coded-In-Motion/
├── frontend/   # Next.js 15 app
├── studio/     # Sanity Studio config
└── package.json (root with workspaces + scripts)

```

- `frontend/` → Handles the main web application.
- `studio/` → Contains Sanity schema, config, and plugins.
- Root `package.json` → Orchestrates both using **npm workspaces**.

---

## 🚀 Development

### Start Next.js + Sanity Studio together

From the root:

```bash
npm run dev
```

This runs:

- `frontend` (Next.js) → [http://localhost:3000](http://localhost:3000)
- `studio` (Sanity Studio, embedded) → [http://localhost:3000/studio](http://localhost:3000/studio)

### Run individually

```bash
# Next.js only
npm run dev --workspace=frontend

# Sanity Studio only
npm run dev --workspace=studio
```

---

## 🧩 Sanity Studio Setup

The Studio is embedded inside Next.js at `/studio`.
Key setup in `frontend/app/studio/[[...index]]/page.tsx`:

```tsx
"use client";
import { NextStudio } from "next-sanity/studio";
import config from "../../../studio/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
```

### Plugins

- `deskTool` → Provides the main content editing desk UI.
- `@sanity/vision` → Query your dataset with GROQ inside the studio.

---

## 🌐 Deployment

### Next.js (Frontend + Embedded Studio)

- Deploy the `frontend/` directory to **Vercel**.
- Root directory in Vercel should be set to `frontend`.

Once deployed:

- App → `https://myapp.com`
- Studio → `https://myapp.com/studio`

### Alternative: Standalone Studio

If you prefer, you can still deploy Studio separately via:

```bash
cd studio
sanity deploy
```

This gives you a hosted Studio on `https://<your-project>.sanity.studio`.

---

## ⚡ Tech Stack

- [Next.js 15](https://nextjs.org/) — React framework with App Router + Turbopack
- [Sanity.io](https://www.sanity.io/) — Headless CMS with real-time editing
- [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) — Monorepo management
- [npm-run-all2](https://github.com/mysticatea/npm-run-all) — Parallel script runner

---

## 🛠 Scripts

At the root:

```bash
npm run dev         # Run both frontend and studio
npm run dev:next    # Run frontend only
npm run dev:studio  # Run studio only
npm run format      # Prettier formatting
npm run lint        # Lint Next.js code
```

---

## 📖 Notes

- Large assets (videos, `.mp4`, `.mov`) are ignored via `.gitignore` and should be uploaded to Sanity or cloud storage, not Git.
- One lockfile (`package-lock.json`) is kept at the root for workspace consistency.
- If you want to protect `/studio`, integrate [NextAuth.js](https://next-auth.js.org/) or Sanity role-based access.

---

✨ **Creating Stories Beyond Expectations.**

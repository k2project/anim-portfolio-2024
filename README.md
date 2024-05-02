This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000/anim-portfolio-2024](http://localhost:3000/anim-portfolio-2024) with your browser to see the result ( see the section below for the explanation in regards to the url).

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## GitHub Pages Deployment

Deploying to the GitHub pages requires setting up the `basePath` to `/anim-portfolio-2024` that corresponds to the project repository name.

This has the following impact on the development process:

1. To view the page in teh browser locally you need to add the basePath to the port

2. Static assets ( images ) source path must be prepended with the basePath
   /anim-portfolio-2024/assets/estendio-logo.png

```bash
<Image src="/anim-portfolio-2024/assets/img.png" alt=""/>
```

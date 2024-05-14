# Animated Portfolio

Welcome to my website. My name is Kris. I'm a mid-level software developer with 5 years of strong commercial experience looking for a dedicated team with a passion for excellence and mentoring. Now, ready for hire. I have created this portfolio to showcase my frontend skills. Enjoy the show!

## Technologies Used

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

-   Next.js 14 to harness the efficiency of React with Next.js for a performant and SEO-friendly portfolio.
-   TypeScript to ensure a robust and scalable foundation for the application and elevate my coding game.
-   Tailwind CSS for convenient and powerful styling.
-   ✨ Framer Motion to infuse life into the website with stunning animations, adding a layer of creativity to every scroll.
-   🎬 Lottie for small in file size, infinitely scalable, and easy to implement animations.
-   🚀 Github Actions for continuous integration and continuous delivery (CI/CD) to automate build, and deployment pipeline.

## Getting Started

1. Clone the repository: git clone [repository-url]
2. Navigate to the project directory: cd [folder-name]
3. Install dependencies
4. Run the project

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

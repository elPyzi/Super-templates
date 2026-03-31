# Shadcn-FSD Template

## Project Architecture Pattern

This template uses the [FSD](https://feature-sliced.design/) architecture pattern.

From the documentation:

**Feature-Sliced Design (FSD)** is a methodology for designing frontend applications. In simple terms, it is a set of rules and conventions for organizing code. The main goal of this methodology is to make the project more understandable and stable under constantly changing business requirements.

---

## Tech Stack

**I use `bun`**

| Category                   | Library / Tool           | Version  | Documentation                                                           |
| -------------------------- | ----------------------- | ------- | ---------------------------------------------------------------------- |
| **Framework & Rendering**  | Next.js                 | 16.1.5  | [docs](https://nextjs.org/docs)                                        |
|                            | React                   | 19.2.3  | [docs](https://react.dev/)                                             |
| **Styling & UI**           | Tailwind CSS            | 4       | [docs](https://tailwindcss.com/docs/installation)                      |
|                            | tw-animate-css          | 1.4.0   | [docs](https://tailwind-animate.netlify.app/)                          |
|                            | Lucide React            | 0.562.0 | [docs](https://lucide.dev/docs/react)                                  |
|                            | Radix UI                | 1.4.3   | [docs](https://www.radix-ui.com/docs/primitives/overview/introduction) |
| **Forms & Validation**     | React Hook Form         | 7.71.1  | [docs](https://react-hook-form.com/)                                   |
|                            | @hookform/resolvers     | 5.2.2   | [docs](https://react-hook-form.com/get-started#SchemaValidation)       |
|                            | Zod                     | 4.3.6   | [docs](https://zod.dev/)                                               |
|                            | @react-input/mask       | 2.0.4   | [npm](https://www.npmjs.com/package/@react-input/mask)                 |
| **State & Data Fetching**  | Zustand                 | 5.0.10  | [docs](https://zustand-demo.pmnd.rs/)                                  |
|                            | React Query             | 5.90.19 | [docs](https://tanstack.com/query/v5/docs/react/overview)              |
|                            | React Query Devtools    | 5.91.2  | [docs](https://tanstack.com/query/v5/docs/devtools)                    |
| **Tables & Data**          | React Table             | 8.21.3  | [docs](https://tanstack.com/table/v8/docs/overview)                    |
|                            | Axios                   | 1.13.2  | [docs](https://axios-http.com/docs/intro)                              |
| **Date Utilities**         | date-fns                | 4.1.0   | [docs](https://date-fns.org/docs/Getting-Started)                      |
|                            | react-day-picker        | 9.13.1  | [docs](https://react-day-picker.js.org/)                               |
| **Animations & Carousels** | embla-carousel-react    | 8.6.0   | [docs](https://www.embla-carousel.com/docs/react/)                     |
| **Theming**                | next-themes             | 0.4.6   | [docs](https://github.com/pacocoursey/next-themes)                     |
| **Extras**                 | Sonner                  | 2.0.7   | [docs](https://sonner.dev/)                                            |
|                            | Vaul                    | 1.1.2   | [npm](https://www.npmjs.com/package/vaul)                              |
|                            | class-variance-authority| 0.7.1   | [docs](https://cva.style/)                                             |
|                            | clsx                    | 2.1.1   | [docs](https://github.com/lukeed/clsx)                                 |
| **Development Tools**      | TypeScript              | 5       | [docs](https://www.typescriptlang.org/docs/)                           |
|                            | Oxlint (planned)        | —       | [official](https://oxlintrc.dev/)                                      |
|                            | Vitest                  | 4.0.18  | [docs](https://vitest.dev/)                                            |
|                            | Storybook               | 10.2.3  | [docs](https://storybook.js.org/docs/react/get-started/introduction)   |
|                            | Playwright              | 1.58.1  | [docs](https://playwright.dev/docs/intro)                              |
|                            | Husky                   | 9.1.7   | [docs](https://typicode.github.io/husky/#/)                            |

---

## Project Start

*You can use any package manager, but make sure to remove `bun.lock` first.*

1. **Install dependencies**
```bash
bun install

2. Run the application in development mode
```bash
bun dev
```

>This will start Next.js at http://localhost:3000

3. Build the project
```bash
bun build
```

>Build the Next.js project for production

4. test
```bash
bun vitest
```

>Run tests using Vitest

5. Storybook
```bash
bun storybook
```

>Start Storybook at http://localhost:6006

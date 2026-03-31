# Шаблон Shadcn-FSD

## Архитекрный паттерн для проекта 

В данном шаблоне используется архитетурный паттерн по проектированию приложения [FSD](https://feature-sliced.design/).

С документации:

**Feature-Sliced Design (FSD)** — это архитектурная методология для проектирования фронтенд-приложений. Проще говоря, это набор правил и соглашений по организации кода. Главная цель этой методологии — сделать проект понятнее и стабильнее в условиях постоянно меняющихся бизнес-требований.

---

## Стек

**Я использую `bun`**

| Категория                  | Библиотека / Инструмент  | Версия  | Документация                                                           |
| -------------------------- | ------------------------ | ------- | ---------------------------------------------------------------------- |
| **Фреймворк и рендеринг**  | Next.js                  | 16.1.5  | [docs](https://nextjs.org/docs)                                        |
|                            | React                    | 19.2.3  | [docs](https://react.dev/)                                             |
| **Стили и UI**             | Tailwind CSS             | 4       | [docs](https://tailwindcss.com/docs/installation)                      |
|                            | tw-animate-css           | 1.4.0   | [docs](https://tailwind-animate.netlify.app/)                          |
|                            | Lucide React             | 0.562.0 | [docs](https://lucide.dev/docs/react)                                  |
|                            | Radix UI                 | 1.4.3   | [docs](https://www.radix-ui.com/docs/primitives/overview/introduction) |
| **Формы и валидация**      | React Hook Form          | 7.71.1  | [docs](https://react-hook-form.com/)                                   |
|                            | @hookform/resolvers      | 5.2.2   | [docs](https://react-hook-form.com/get-started#SchemaValidation)       |
|                            | Zod                      | 4.3.6   | [docs](https://zod.dev/)                                               |
|                            | @react-input/mask        | 2.0.4   | [npm](https://www.npmjs.com/package/@react-input/mask)                 |
| **Состояние и запросы**    | Zustand                  | 5.0.10  | [docs](https://zustand-demo.pmnd.rs/)                                  |
|                            | React Query              | 5.90.19 | [docs](https://tanstack.com/query/v5/docs/react/overview)              |
|                            | React Query Devtools     | 5.91.2  | [docs](https://tanstack.com/query/v5/docs/devtools)                    |
| **Таблицы и данные**       | React Table              | 8.21.3  | [docs](https://tanstack.com/table/v8/docs/overview)                    |
|                            | Axios                    | 1.13.2  | [docs](https://axios-http.com/docs/intro)                              |
| **Функции даты**           | date-fns                 | 4.1.0   | [docs](https://date-fns.org/docs/Getting-Started)                      |
|                            | react-day-picker         | 9.13.1  | [docs](https://react-day-picker.js.org/)                               |
| **Анимации и карусели**    | embla-carousel-react     | 8.6.0   | [docs](https://www.embla-carousel.com/docs/react/)                     |
| **Темизация**              | next-themes              | 0.4.6   | [docs](https://github.com/pacocoursey/next-themes)                     |
| **Дополнительно**          | Sonner                   | 2.0.7   | [docs](https://sonner.dev/)                                            |
|                            | Vaul                     | 1.1.2   | [npm](https://www.npmjs.com/package/vaul)                              |
|                            | class-variance-authority | 0.7.1   | [docs](https://cva.style/)                                             |
|                            | clsx                     | 2.1.1   | [docs](https://github.com/lukeed/clsx)                                 |
| **Инструменты разработки** | TypeScript               | 5       | [docs](https://www.typescriptlang.org/docs/)                           |
|                            | Oxlint (planned)         | —       | [official](https://oxlintrc.dev/)                                      |
|                            | Vitest                   | 4.0.18  | [docs](https://vitest.dev/)                                            |
|                            | Storybook                | 10.2.3  | [docs](https://storybook.js.org/docs/react/get-started/introduction)   |
|                            | Playwright               | 1.58.1  | [docs](https://playwright.dev/docs/intro)                              |
|                            | Husky                    | 9.1.7   | [docs](https://typicode.github.io/husky/#/)                            |

---

## Старт проекта локально

*Вы можете использовать любой другой пакетный менеджер,но нужно удалить `bun.lock`.*

1. **Установить зависимости**
```bash
bun install
```
2. Запуск приложения в режиме разработки
```bash
bun dev
```

>Запустит Next.js на http://localhost:3000

3. Сборка проекта
```bash
bun build
```

>Сборка Next.js проекта в production

4. Тесты
```bash
bun vitest
```

>Запуск тестов через Vitest

5. Storybook
```bash
bun storybook
```

>Запуск Storybook на http://localhost:6006

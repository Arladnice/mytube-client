# GEMINI.md

## Project Overview

This is a [Next.js](https://nextjs.org/) project, bootstrapped with `create-next-app`. It appears to be a client-side application for a video platform called "MyTube", as suggested by the project name and some of the dependencies.

The project uses TypeScript, SCSS for styling (as indicated by `globals.scss` and `Layout.module.scss`), and Tailwind CSS. It also uses `react-query` for data fetching, `axios` for making HTTP requests, and `lucide-react` for icons.

The application seems to have features like exploring content, viewing profiles, searching, and viewing trending videos.

## Building and Running

To get the development server running, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

To build the project for production, use:

```bash
npm run build
```

To start the production server, use:

```bash
npm run start
```

To lint the project files, use:

```bash
npm run lint
```

## Development Conventions

*   **Styling:** The project uses a combination of SCSS modules and Tailwind CSS for styling.
*   **Component Structure:** Components are organized into `layout` and `ui` directories within the `src/components` folder.
*   **Data Fetching:** `react-query` and `axios` are used for data fetching.
*   **Type Safety:** The project is written in TypeScript.
*   **Code Quality:** ESLint and Prettier are used for code linting and formatting.

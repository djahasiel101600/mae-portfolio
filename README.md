# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## Deployment (Vercel)

- **What this does:** The repository frontend is deployed as a static/Vite app on Vercel. Server-side contact sending is implemented as a Vercel Serverless Function at `api/send-contact.js`.

- **Required environment variables (set these in the Vercel project settings):**

```
GMAIL_CLIENT_ID
GMAIL_CLIENT_SECRET
GMAIL_REFRESH_TOKEN
SENDER_EMAIL
CONTACT_RECIPIENT
SENDER_NAME
```

- **Optional environment variables:**

```
SENDER_NAME       # display name used in outgoing email (default: "Mae Busano")
CONTACT_RECIPIENT # override recipient, defaults to SENDER_EMAIL
DOMAIN            # used to create default no-reply address when SENDER_EMAIL not set
```

- **How to set them on Vercel:**

  1. Open your project on Vercel.
  2. Go to Settings → Environment Variables.
  3. Add each variable with the appropriate value and choose the environments (Preview/Production).

- **Local development:** create a local `.env` file (do not commit) with the same variables, then run `npm run dev` or `vercel dev` to test the function locally.

- **Notes:**
  - `server/index.js` has been replaced by `api/send-contact.js` for Vercel deployments; you can remove or keep `server/index.js` for local reference.
  - `vercel.json` sets the Node runtime for functions to Node 18.

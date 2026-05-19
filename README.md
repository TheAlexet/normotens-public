# Normotens

Normotens is a React application for tracking blood pressure and related wellness information. The project is built with React, Vite, Material UI, and React Router.

## Tech Stack

- React
- Vite
- Material UI (MUI)
- React Router
- JavaScript

## Features

- Light and dark theme support
- Custom color and typography system
- Home screen with centered image from local assets
- Privacy Policy page rendered from Markdown
- English and Spanish privacy policy content
- Client-side routing with React Router

## Project Structure

```bash
src/
  assets/
  content/
    privacy-policy.md
    privacy-policy.es.md
  pages/
    Home.jsx
    PrivacyPolicy.jsx
  theme/
    theme.js
    typography.js
    muiTheme.js
  App.jsx
  main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/normotens.git
cd normotens
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite usually starts the app at:

```bash
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Available Routes

- `/` — Home page
- `/privacy-policy/` — Privacy Policy page

## Theming

The app uses custom theme tokens defined in separate files:

- `src/theme/theme.js` for light and dark color palettes
- `src/theme/typography.js` for typography settings
- `src/theme/muiTheme.js` to map custom tokens into Material UI

## Privacy Policy

The privacy policy content is stored as Markdown files and rendered in the app using `react-markdown`.

## Notes

- This project uses Vite, so the correct development command is `npm run dev`, not `npm start`.
- Do not commit `node_modules` or `.env` files.

## License

This project is for private development unless you add a license file.
# Movies List Application

A React application that displays popular movies and search results from The Movie Database (TMDB). Users can save favorite movies to the browser's `localStorage`.

## Features

- Search movies by title
- View popular movies
- Save and remove favorites (persisted to `localStorage`)
- Client-side routing (Home, Favorites)

## Tech

- React, Vite, React Router

## Quick start

Install dependencies and run the development server:

```bash
cd react-app
npm install
npm run dev
```

Build and preview production bundle:

```bash
npm run build
npm run preview
```

## Configuration

The app reads the TMDB API key from the `VITE_TMDB_API_KEY` environment variable. See `.env.example` for the expected variable name.

## Project layout (key files)

- `src/App.jsx` — application root and routes
- `src/pages/Home.jsx` — search and popular movies
- `src/pages/Favorites.jsx` — favorites view
- `src/components/MovieCard.jsx` — movie display and favorite button
- `src/contexts/MovieContext.jsx` — favorites state (localStorage)
- `src/services/api.js` — TMDB API helpers

## Notes

- Favorites are stored under the `favorites` key in `localStorage`.
- Do not commit secret keys; use environment variables for deployment.

## License

MIT (suggested)

## Author

Sriteja

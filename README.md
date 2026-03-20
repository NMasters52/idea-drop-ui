# IdeaDrop

> Share, explore, and build on the best startup ideas and side hustles.

## Overview

IdeaDrop is a modern full-stack idea-sharing platform that enables users to discover, contribute to, and collaborate on innovative startup concepts and side projects. The application features a clean, responsive interface built with React 19 and powered by a robust Express.js backend.

## Tech Stack

### Frontend

- **React 19** - UI library with latest features
- **TypeScript** - Type-safe development
- **Vite 7** - Lightning-fast build tool and dev server
- **TanStack Router** - File-based routing with type-safe navigation
- **TanStack Query** - Powerful data fetching, caching, and state management
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icon set
- **Axios** - HTTP client for API communication
- **Vitest** - Fast unit testing framework

### Backend (See [idea-drop-api](../idea-drop-api))

- Express.js 5
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

## Features

- **File-Based Routing** - Automatic route generation with TanStack Router
- **Type-Safe Data Fetching** - TanStack Query with built-in caching and loading states
- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **Idea Browsing** - View all ideas or limit to latest 3 on homepage
- **Idea Details** - Full idea view with title, summary, description, and tags
- **CRUD Operations** - Create, read, update, and delete ideas
- **Protected Routes** - Authentication required for write operations
- **Tag System** - Categorize ideas with comma-separated tags
- **Modern UI Components** - Reusable, styled components
- **Error Handling** - 404 page and error boundaries
- **Development Tools** - TanStack Router & Query devtools

## Prerequisites

- Node.js 18+ and npm/pnpm
- MongoDB instance (local or cloud)
- Backend API running on port 8000

## Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd idea-drop-ui
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Configure environment variables**

   ```bash
   # Create a .env file in the project root
   echo "VITE_API_URL=http://localhost:8000" > .env
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## Available Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start development server on port 3000 |
| `npm run build` | Build for production with TypeScript  |
| `npm run serve` | Preview production build locally      |
| `npm run test`  | Run Vitest unit tests                 |

## Project Structure

```
src/
├── api/              # API client functions
├── components/       # Reusable UI components
│   ├── Header.tsx
│   └── IdeaCard.tsx
├── lib/              # Utility libraries
│   └── axios.ts      # Configured Axios instance
├── routes/           # File-based routes
│   ├── __root.tsx    # Root layout
│   ├── index.tsx     # Homepage
│   ├── ideas/        # Ideas routes
│   │   ├── index.tsx
│   │   ├── $ideaId/
│   │   └── new/
│   └── routeTree.gen.ts
├── styles.css        # Global styles
├── main.tsx          # App entry point
└── types.ts          # TypeScript type definitions
```

## API Integration

This frontend communicates with the [IdeaDrop API](../idea-drop-api). Key endpoints:

| Method | Endpoint         | Description                            |
| ------ | ---------------- | -------------------------------------- |
| GET    | `/api/ideas`     | Fetch all ideas (supports `?_limit=N`) |
| GET    | `/api/ideas/:id` | Fetch single idea                      |
| POST   | `/api/ideas`     | Create new idea (requires auth)        |
| PUT    | `/api/ideas/:id` | Update idea (requires auth)            |
| DELETE | `/api/ideas/:id` | Delete idea (requires auth)            |

See the [backend README](../idea-drop-api) for full API documentation.

## Development

### Adding New Routes

1. Create a new file in `src/routes/`
2. TanStack Router automatically generates the route
3. Use the `Link` component for navigation:
   ```tsx
   import { Link } from "@tanstack/react-router";
   <Link to="/your-route">Go</Link>;
   ```

### Data Fetching with TanStack Query

```tsx
import { useQuery } from "@tanstack/react-query";

const { data, isLoading, error } = useQuery({
  queryKey: ["ideas"],
  queryFn: () => fetchIdeas(),
});
```

### Testing

```bash
npm run test
```

## License

MIT © Nicholas Masters

---

Built with ❤️ using React 19 and TanStack

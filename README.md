# Spoti Stat - Next.js Project Setup

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 20+)
- [npm](https://www.npmjs.com/) (included with Node.js)

## Getting Started

1. **Clone the Repository**

   ```sh
   git clone [https://github.com/ArtemKuryshko/Spoti-Stat.git](https://github.com/ArtemKuryshko/Spoti-Stat.git)
   
   cd spoti-stat
   ```

3. **Install Dependencies**

   ```sh
   npm install
   ```

4. **Run the Development Server**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- **`npm run dev`** - Starts the development server.
- **`npm run lint`** - Lints the project for code quality.

## Project Structure

```
/project-root
│── public/          # Static assets
│── src/             # Source code
│   ├── components/  # Reusable UI components
│   ├── pages/       # Next.js pages (routes)
│   ├── styles/      # Global and component-specific styles
│── .env.local       # Environment variables (ignored by Git)
│── package.json     # Project metadata and dependencies
│── next.config.js   # Next.js configuration
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure the required variables.

## Libraries & Frameworks Used

This project uses the following libraries and frameworks:

- [Next.js](https://nextjs.org/docs) - React framework for production.
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - State management library.
- [TanStack React Query](https://tanstack.com/query/latest/docs/react/overview) - Data fetching and caching.
- [Axios](https://axios-http.com/docs/intro) - HTTP client for API requests.
- [TypeScript](https://www.typescriptlang.org/docs/) - Typed JavaScript.
- [React](https://react.dev/) - UI library.

## Contributing

1. Create a new branch: `git checkout -b feature-branch`
2. Commit changes: `git commit -m "Add new feature"`
3. Push to remote: `git push origin feature-branch`
4. Open a Pull Request

## License

This project is licensed under [MIT License](LICENSE).

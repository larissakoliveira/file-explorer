# File Explorer Project

A React-based file explorer application built with TypeScript and Vite. This project allows users to browse and interact with a file system structure.

## Technologies Used

- React - JavaScript library for building user interfaces.
- Vite - A fast build tool and development server for modern web projects.
- TypeScript - A superset of JavaScript that provides static typing.
- Electron - Framework for building cross-platform desktop applications with web technologies.
- Cypress - A testing framework for end-to-end testing.
- ESLint - A tool for identifying and fixing problems in JavaScript and TypeScript code.
- Lodash - A utility library for JavaScript.

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd file-explorer
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Development

To run the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production build:
```bash
npm run build
# or
yarn build
```

To preview the production build:
```bash
npm run preview
# or
yarn preview
```

## Testing

This project uses Cypress for end-to-end testing. To run the tests:

- Open Cypress Test Runner:
```bash
npm run cypress:open
# or
yarn cypress:open
```

- Run tests in headless mode:
```bash
npm run cypress:run
# or
yarn cypress:run
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Cypress for testing
- ESLint for code linting
- Lodash for utility functions

## Project Structure

- `/src` - Source code
  - `/api` - API layer
  - `/assets` - Static files
  - `/components` - Reusable UI components
  - `/types` - Type definitions
  - `/utils` - Utility functions
- `/cypress` - End-to-end tests

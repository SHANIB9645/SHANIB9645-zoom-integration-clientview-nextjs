# ZoomWeb

A web application leveraging the Zoom Meeting SDK for seamless video conferencing integration, built with Next.js and styled using Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Features

- **Zoom SDK Integration:** Seamlessly join and host Zoom meetings.
- **Next.js Framework:** Optimized for server-side rendering and fast performance.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Zoom Meeting SDK credentials (API Key and Secret)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SHANIB9645/SHANIB9645-zoom-integration-clientview-nextjs.git
   cd zoomweb
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure Zoom SDK credentials:

   Create a `.env.local` file in the root directory and add your Zoom API credentials:

   ```env
   NEXT_PUBLIC_ZOOM_API_KEY=your_api_key
   NEXT_PUBLIC_ZOOM_API_SECRET=your_api_secret
   ```

### Running the Application

#### Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open (http://localhost:3000) to view the app in the browser.

#### Production Build

Build the application for production:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm run start
# or
yarn start
```

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `start`: Runs the production server.
- `lint`: Lints the codebase using ESLint.

## Technologies Used

- **Next.js** (v14.1.0): React framework for server-side rendering and static site generation.
- **React** (v18.2.0): JavaScript library for building user interfaces.
- **Zoom Meeting SDK** (v3.11.0): For integrating Zoom video conferencing.
- **Tailwind CSS** (v3.4.1): Utility-first CSS framework for styling.
- **ESLint**: Linter for maintaining code quality.

 

### Contribution

Contributions are welcome! Please fork this repository and submit a pull request for any features, enhancements, or bug fixes.

---

### Contact

If you have any questions or feedback, feel free to reach out:

- **Email:** shanibpoozhithara.006@example.com
- **GitHub:** (https://github.com/SHANIB9645)


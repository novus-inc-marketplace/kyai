# Barakah Roots — Kenya Youth Agricultural Initiative

This project is a website for the Barakah Roots, a Kenya Youth Agricultural Initiative.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd barakah-roots-site
   ```
3. Install the frontend dependencies:
   ```bash
   npm install
   ```
4. Navigate to the server directory and install the backend dependencies:
   ```bash
   cd server
   npm install
   ```

### Development

To run both the frontend and backend servers concurrently, use the following command from the root `barakah-roots-site` directory:

```bash
npm run dev
```

This will start the frontend development server on `http://localhost:5173` and the backend server on `http://localhost:3001`.

### Build

To build the frontend for production, run the following command from the root `barakah-roots-site` directory:

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Deployment

#### Frontend (Vercel)

1. Push your code to a Git repository (e.g., GitHub).
2. Sign up for a Vercel account.
3. Create a new project and connect it to your Git repository.
4. Configure the project settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Deploy the project.

#### Backend (Render)

1. Sign up for a Render account.
2. Create a new "Web Service".
3. Connect it to your Git repository.
4. Configure the project settings:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
5. Deploy the service.
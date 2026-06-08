<div align="center">
  <h1>🚀 Career Pilot</h1>
  <p>An AI-powered resume builder and career toolkit that helps users create resumes, prepare for interviews, search jobs, and launch developer portfolios.</p>
  <p>
    <a href="https://careerpilotyy.netlify.app" target="_blank">Live Demo</a> ·
    <a href="https://github.com/anurag3407/career-pilot" target="_blank">Source</a>
  </p>
</div>

## Overview

Career Pilot is a full-stack web application built to help job seekers and developers accelerate career readiness with AI-enhanced resume creation, interview preparation, job discovery, portfolio publishing, and real-time collaboration.

The project combines a React + Vite frontend with an Express backend, Firebase authentication, AI providers (Gemini / OpenAI / Groq), job search integration, and portfolio deployment capabilities.

## Why This Project

- Enables non-technical users to build polished resumes quickly
- Supports AI-powered resume enrichment, interview coaching, and job search
- Includes portfolio builder and live deploy workflows for developers
- Designed for contributors with a modular frontend/backend architecture

## Key Features

- AI resume builder with smart content generation and formatting
- PDF export and resume download using `jsPDF` + `html2canvas`
- Firebase authentication and session management
- Job search and alerts powered by RapidAPI JSearch
- Portfolio templates and deployment support
- Real-time features with Socket.IO
- Responsive UI with TailwindCSS and Framer Motion
- Admin and community tools for job seekers and teams

## Workflow / How It Works

1. A user signs in through Firebase.
2. They create or edit resume content in the AI-enhanced resume builder.
3. They preview and export a resume as a PDF.
4. The app offers job search, job alerts, and interview preparation tools.
5. Users can publish a developer portfolio and showcase projects.
6. Real-time notifications and collaboration features keep the experience responsive.

## Screenshots / Visual Preview

> Add screenshots or GIFs here to highlight the resume editor, dashboard, portfolio themes, and job search experience.

- Dashboard and personalized career insights
- Resume builder with drag-and-drop editing
- Job search and alerts screen
- Portfolio template preview

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description | Example |
|---|---|---|
| `PORT` | Backend server port | `5001` |
| `NODE_ENV` | Runtime environment | `development` |
| `FRONTEND_URL` | Frontend origin for CORS | `http://localhost:5173` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/career-pilot` |
| `REDIS_URL` | Redis URL for BullMQ | `redis://localhost:6379` |
| `GEMINI_API_KEY` | Google Gemini API key | `your-gemini-api-key` |
| `OPENAI_API_KEY` | OpenAI API key | `your-openai-api-key` |
| `RAPIDAPI_KEY` | RapidAPI key for job search | `your-rapidapi-key` |
| `FIREBASE_PROJECT_ID` | Firebase project identifier | `your-firebase-project-id` |
| `FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | `your-firebase.appspot.com` |
| `FIREBASE_SERVICE_ACCOUNT_PATH` | Path to Firebase service account JSON | `./service-account.json` |
| `EMAIL_HOST` | SMTP host for email service | `smtp.gmail.com` |
| `EMAIL_PORT` | SMTP port | `587` |
| `EMAIL_USER` | Email sender address | `no-reply@example.com` |
| `EMAIL_PASS` | SMTP password / app password | `your-email-password` |
| `LINKEDIN_REDIRECT_URI` | LinkedIn OAuth callback | `http://localhost:5001/api/auth/linkedin/callback` |
| `DEV_BYPASS_AUTH` | Local auth bypass flag | `false` |

### Frontend (`frontend/.env`)

| Variable | Description | Example |
|---|---|---|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5001` |
| `VITE_API_BASE` | Backend API prefix | `http://localhost:5001/api` |
| `VITE_FIREBASE_API_KEY` | Firebase client API key | `your-firebase-api-key` |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | `your-project.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID | `your-firebase-project-id` |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | `your-project.appspot.com` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID | `1234567890` |
| `VITE_FIREBASE_APP_ID` | Firebase app ID | `1:1234567890:web:abcdef123456` |
| `VITE_FIREBASE_MEASUREMENT_ID` | Analytics measurement ID | `G-XXXXXXXXXX` |
| `VITE_MAX_SIZE_MB` | Max upload size for resumes | `5` |

> For the complete list of supported variables, see `backend/.env.example`, `frontend/.env.example`, and `docs/environment-setup.md`.

## Project Structure

```
career-pilot/
├── backend/               # Express API, AI integrations, auth, jobs, scheduler, portfolio deployment
├── frontend/              # React + Vite app, resume builder, dashboard, portfolio templates
├── docs/                  # Setup guides and environment documentation
├── CONTRIBUTION.md        # Contribution guidelines
├── CODE_OF_CONDUCT.md    # Community behavior policy
├── LICENSE               # Project license
└── README.md             # Project overview and onboarding
```

## Quick Start

```bash
# Install dependencies for frontend and root scripts
cd career-pilot
npm install

# Backend install
cd backend
npm install

# Frontend install
cd ../frontend
npm install
```

### Run locally

```bash
# Start backend (from backend/)
npm run dev

# Start frontend (from frontend/)
npm run dev
```

## Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** TailwindCSS 4, Framer Motion
- **Backend:** Node.js, Express
- **Authentication:** Firebase
- **AI Providers:** Google Gemini, OpenAI, Groq
- **Job Search:** RapidAPI JSearch
- **Real-time:** Socket.IO
- **Data:** MongoDB, Redis / BullMQ

## Contributing

We welcome contributions from developers of all levels.

1. Fork the repo
2. Create a feature branch
3. Commit and push your changes
4. Open a PR against `main`

See [CONTRIBUTION.md](CONTRIBUTION.md) for full details.

## Maintainers

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/anurag3407">
          <img src="https://github.com/anurag3407.png" width="100" style="border-radius: 50%;" alt="anurag3407"/><br />
          <sub><b>anurag3407</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/Mohnish27-dev">
          <img src="https://github.com/Mohnish27-dev.png" width="100" style="border-radius: 50%;" alt="Mohnish27-dev"/><br />
          <sub><b>Mohnish27-dev</b></sub>
        </a>
      </td>
    </tr>
  </table>
</div>

## License

This project is open-source and licensed under the terms in the `LICENSE` file.

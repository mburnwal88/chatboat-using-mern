# CHATBOAT-USING-MERN

> I developed a dynamic AI chatbot leveraging Ollama models installed locally, using a modern Node.js, Express, and React tech stack. This chatbot is designed to be highly flexible and user-friendly, allowing seamless interaction with any Ollama model.

> What makes this project unique is its dynamic model selection: users can simply update the OLLAMA_MODEL variable in the .env file, and the chatbot will automatically route queries to the chosen model. Whether it’s LLaMA, Mistral, Phi, or any other Ollama-supported model, the system adapts instantly, delivering accurate and context-aware responses.

> The frontend, built with React, provides a clean, responsive, and interactive chat interface, while the backend powered by Node.js and Express handles efficient API communication, model invocation, and response streaming. This architecture ensures low latency, real-time responses, and the ability to scale with multiple models without code changes.

> In essence, this project is not just a chatbot — it’s a plug-and-play AI chat platform that brings customizable LLM interactions to developers and users, all running entirely locally for enhanced privacy and control.

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Running the Project](#running-the-project)
4. [Folder Structure](#folder-structure)
5. [Scripts](#scripts)
6. [Technologies Used](#technologies-used)
7. [Environment Variables](#environment-variables)
8. [API Documentation](#api-documentation)
9. [Screenshots / Demo](#screenshots--demo)
10. [Troubleshooting](#troubleshooting)
11. [Contributing](#contributing)
12. [License](#license)

---

## Features

* Separate **frontend** and **backend** projects in a single monorepo.
* Frontend built with React, supports dynamic UI interactions.
* Backend built with Node.js and Express for REST APIs.
* Run both projects concurrently using **npm start** from the root.
* Separate `node_modules` for frontend and backend for modularity.

---

## Installation

Clone the repository and install dependencies:

```bash
git clone [<https://github.com/mburnwal88/chatboat-using-mern.git>]
cd CHATBOAT-USING-MERN
npm install
```

> This installs **root-level dev dependencies** like `concurrently`.
> Each subproject manages its own dependencies in `frontend/node_modules` and `backend/node_modules`.

---

## Running the Project

Start both frontend and backend concurrently:

```bash
npm start
```

* Frontend default port: `3000`
* Backend default port: `3001`

> To run individually:
>
> ```bash
> npm run start:frontend
> npm run start:backend
> ```

---

## Folder Structure

```
CHATBOT-USING-MERN/
│
├── backend/
│ ├── .env # Environment variables
│ ├── package.json # Backend dependencies
│ ├── package-lock.json
│ └── server.js # Express server
│
├── frontend/
│ ├── node_modules/ # Frontend dependencies
│ ├── public/
│ │ ├── favicon.ico
│ │ ├── index.html
│ │ ├── logo192.png
│ │ ├── logo512.png
│ │ ├── manifest.json
│ │ └── robots.txt
│ │
│ ├── src/
│ │ ├── App.css
│ │ ├── App.js
│ │ ├── App.test.js
│ │ ├── index.css
│ │ ├── index.js
│ │ ├── logo.svg
│ │ ├── reportWebVitals.js
│ │ └── setupTests.js
│ │
│ ├── package.json
│ └── package-lock.json
│
├── node_modules/ # Root node modules
├── .gitignore
├── package.json # Root package.json (if applicable)
└── package-lock.json
```

---

## Scripts (root `package.json`)

| Script                        | Description                            |
| ----------------------------- | -------------------------------------- |
| `npm start`                   | Runs frontend and backend concurrently |
| `npm start --prefix frontend` | Runs only frontend                     |
| `npm start --prefix backend`  | Runs only backend                      |

---

## Technologies Used

* **Frontend:** React, fetch, CSS3/HTML5
* **Backend:** Node.js, Express, CORS, dotenv
* **Dev Tools:** concurrently

---

## Environment Variables

Create `.env` **backend** as needed.

**Example backend/.env:**

```
PORT=BACKEND_PORT_NUMBER
OLLAMA_MODEL=YOUR_LOCAL_OLLAMA_MODEL
```

---

## API Documentation

**Example endpoints (backend):**

| Method | Endpoint         | Description                    |
| ------ | ---------------- | -------------------------------|
| GET    | `/health`        | To test server is up           |
| POST   | `/ask`           | Get Response From Ollama Model |
| GET    | `/ask-stream`    | Get Response in Stream         |



---

## Troubleshooting

* If `npm start` fails, ensure you have **Node.js >=18** and **npm >=9** installed.
* If dependencies are missing, run `npm install` inside the **frontend** and **backend** folders separately.
* For port conflicts, change the ports in `.env` or start scripts.






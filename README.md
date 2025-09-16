# CHATBOAT-USING-MERN

> A Chatboat using Ollama local model and MERN stack tech skills monorepo project with separate frontend (React) and backend (Node.js/Express) running concurrently.

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
git clone [<repository-url>](https://github.com/mburnwal88/chatboat-using-mern.git)
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
CHATBOAT-USING-MERN/
│  package.json      # root scripts only
│  node_modules/     # root dev tools like concurrently
│
├─ frontend/
│  ├─ package.json   # frontend dependencies & scripts
│  └─ node_modules/
│
└─ backend/
   ├─ package.json   # backend dependencies & scripts
   └─ node_modules/
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



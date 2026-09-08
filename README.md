# Nexora Solutions

Enterprise full-stack digital solutions platform built with React, Node.js/Express, Prisma ORM, and PostgreSQL. The application features a dynamic public client portal, inquiry routing, an automated careers application intake system with resume handling, and an authenticated internal staff dashboard.

---

## Architecture Overview

The repository is structured as a monorepo containing decoupled client and API services:

```text
nexora-solutions/
├── backend/                  # Node.js + Express REST API
│   ├── prisma/               # Schema definitions, migrations, and seed script
│   ├── src/
│   │   ├── config/           # Database clients and environment setups
│   │   ├── middleware/       # JWT authentication and role-based guards
│   │   ├── routes/           # Auth, contact, and career endpoints
│   │   └── server.js         # Express app entrypoint and CORS policy
│   └── uploads/              # Local storage destination for candidate resumes
│
└── frontend/                 # React 18 SPA (Vite)
    ├── src/
    │   ├── components/       # Reusable UI modules, layouts, and route guards
    │   ├── context/          # Global theme context (Dark/Light mode)
    │   ├── pages/            # Public pages, forms, and the Admin Command Portal
    │   └── data/             # Static showcase and project data
    └── vite.config.js

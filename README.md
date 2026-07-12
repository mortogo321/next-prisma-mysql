# Next.js + Prisma + MySQL Todo App

A small full-stack todo application demonstrating Next.js App Router server actions with a Prisma ORM data layer on MySQL.

## What's inside

- Server-rendered todo list and create form using React Server Components and Server Actions (no client-side API layer)
- Prisma schema with `users`, `todo`, and `tags` models (many-to-many tags, one-to-many user/todo) plus a seed script
- Form validation with Zod on the server action before writing to the database
- Dockerized MySQL for local development

## Tech stack

- Next.js (App Router) with React and TypeScript
- Prisma ORM
- MySQL
- Tailwind CSS + Flowbite components
- Zod for input validation

## Quickstart

```bash
# start MySQL via Docker
docker compose -f docker/docker-compose.development.yaml up -d mysql

# install dependencies
yarn install

# apply migrations and seed data
yarn prisma migrate deploy
yarn prisma db seed

# run the dev server
yarn dev
```

Or run the whole stack (app + MySQL) in Docker:

```bash
docker compose -f docker/docker-compose.development.yaml up -d --build
```

App: http://localhost:3000

## Structure

```
app/                 Next.js App Router pages and layout
app/todo/            Todo list page and server action for creating todos
app/components/      Navbar, sidebar, todo item UI
app/db/              Prisma client, actions, and types
prisma/              Schema, migrations, and seed script
docker/              Dockerfile and Compose file for local MySQL + app
```

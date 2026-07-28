# Project Rules & Guidelines

## Database & Prisma Guidelines
- **NEVER use `prisma db push`** when modifying Prisma schema files.
- Always use **`prisma migrate dev`** (or `npm run prisma:migrate:dev`) to ensure migration SQL history is generated cleanly and database schema drift is prevented.
- **ALWAYS INFORM AND ASK CONFIRMATION FROM THE USER BEFORE DELETING DATA OR RESETTING THE DATABASE**. Never execute destructive scripts or migrations that drop database data without explicit user approval.


# Full Stack Reminder App

This project is a modern and responsive web application that allows users to create and manage reminders. Built using cutting-edge technologies, this app demonstrates how to create a full stack application with a strong focus on user experience and performance.

## Technologies Used

- **React**
- **Next.js**
- **TypeScript**
- **ServerActions**
- **Zod**
- **React Hook Form**
- **Prisma**
- **TailwindCSS**
- **Shadcn/UI**

## Features

- User authentication and session management
- Dynamic and responsive layout with TailwindCSS
- Theme switcher for light and dark modes
- Data validation using Zod
- Form management with React Hook Form
- Database interactions with Prisma ORM
- Create, update, and delete reminders
- Real-time progress tracking with progress bars

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js installed
- npm or yarn installed

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/theahmetgg/RemindMe
   cd RemindMe
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up the environment variables:**

   Create a `.env` file in the root directory and add your environment variables. Refer to `.env.example` for the required variables.

4. **Set up the database:**

   Run Prisma migrations to set up the database schema.

   ```bash
   npx prisma migrate dev
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Project Structure

- `pages/`: Contains the Next.js pages, including the main layout and different routes.
- `components/`: Reusable React components, including the Navbar, ThemeSwitcher, CollectionCard, and TaskCard.
- `prisma/`: Prisma schema and migration files.
- `styles/`: Global styles and TailwindCSS configurations.
- `utils/`: Utility functions, including Zod validation schemas and server actions.

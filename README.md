## Greetings Tsveto from the future! 

Here is a project you can use to startup a each of your new projects. **It is mainly meant for more advanced projects that do not need to be SSR ed** so keep that in mind

## Getting Started

First create a folder with the name of the new project and cd into it

```bash
mkdir {projectName}
```

```bash
cd {projectName}
```

Then clone this repo in that location 

```bash
git clone https://github.com/Sclipper/basic-nextjs-setup.git .
```

Next remove the current origin

```bash
git remote remove origin
```

Create a new repository and copy the code that github provides 

```bash
git remote add origin https://github.com/${nickname}/${projectName}.git
git branch -M master
git push -u origin master
```

Dont forget to change the readme :) 


You need to create a .env file here with 1 varibale

`DATABASE_URL="postgresql://{username}:{password}@{ip}:5432/{db-name}"`



TODO: Fix the readme to explain the folder structure 

You need to create a .env file here with 1 varibale

`DATABASE_URL="postgresql://{username}:{password}@{ip}:5432/{db-name}"`
## Features / Technologies

-   **Express.js** – Web framework for building APIs
-   **Prisma** – ORM for database interactions
-   **PostgreSQL** – Database

----------

## Folder Structure

### **📂 prisma/**

Contains the **database schema** and **migrations**.

#### **📂 config/**

Stores **configuration files**, such as database connections and email setup.

#### **📂 helper/**

Contains **utility functions** like error handling, compression, and common helpers.

#### **📂 middleware/**

Middleware functions for **authentication, logging, and request handling** etc...

#### **📂 modules/**

Each module handles a specific **business logic** (e.g., `Scheduler`, `DataExtractor`).  
Each module contains:

-   `.controller.ts` – Defines the module’s business logic.
-   `.helper.ts` – Contains helper functions specific to the module.
-   `.model.ts` – Holds any data structures necessary for the component to operate.
-   `.router.ts` – Defines the API routes.
-   `.types.ts` – Holds TypeScript types for the module.

----------

## Guidelines

-   Keep modules **organized and modular**.
-   Follow **best practices for Express and Prisma**.
-   Keep dependencies **up to date** (automate this if possible).
-   Use **environment variables** for sensitive information.


# Make sure you keep everything up to date, or at some point add a bot that will do that for you 

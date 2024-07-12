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


## Features / Technologies
- Express

### Database / ORM
- Prisma

## Folder Structure and guide for everything
Starting from the top

## Configs 
Configs is where you should keep your environment variables, and nay other global configurations that you might need.

## Middleware
Middleware is where you should keep all your middlewares and handlers

- Context is already setup for you so you can use that for global state management
Currently it has the theme switch and the `isAuthenticated` state
- Helpers for any global helper functions you may need
- API for all your api calls
- Queries for all the tanstack queries 


## Pages
Following Tanstack router's flow you came up with (omega genius) each page should be split in its own folder with the same name as the page.
Each page should have

- index
- Loading
- Error

On top of that you can add extras like

- components (folder for components that are only used in this page)
- PageName.styles.css
- PageName.hooks.tsx
- PageName.controller.tsx
- PageName.model.ts



# Make sure you keep everything up to date, or at some point add a bot that will do that for you 

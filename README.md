# Jott

A minimalistic expense tracker for storing records.

This project is an excuse for trying out a bunch of technologies I haven't had the chance to use before (✨), and dip my toes into React development and deployment ecosystem outside of Next.js and Vercel, both of which I've been extremely spoiled with lately. 

## Technologies used
- Bun ✨ | Runtime Environment
- Hono.js ✨ | Web Framework
- Vite ✨ | Build Tool
- Drizzle ORM
- Neon PG
- ZOD
- Tanstak Query
- Tanstak Router ✨
- Tanstak Form
- Tailwind 

## Experience building this app

### Endpoints and Validation
Setting up new endpoints can be done extremely easy using Hono. Though as it's commonly the case, validating client inputs is very necessary. 
Manually implementing the validation logic can end up with a lot of redundant and repetitive code, but Hono provides a really clean and handy API in which custom validators can be defined. Additionally, a `zValidator` package is available to make this even more frictionless when using `zod` as a third-party validator, with which a simple middleware can be easily defined for the routes that need it, and we can trust we have correctly parsed the expected data by the time we reach the handler with just a couple lines of boilerplate for each route. 

### API vs Client service
Unlike Next.js, the "backend" aspect is not automatically set up and handled for you. This is why this project has two different main directories: `server` and `client`. 

In `server`, we keep all the files related to serving our API and interacting with the database; while in `client` we manage our Vite React application.

However, the way these two services interact with each other require a little bit of work, specially when jumping from a development environment to a production one.

During development, we run both services separately, thus having a different origin for each (Ex: Vite:5173 BunServer:3000). This means that requests need to be made to two different places depending on the service we want to interact with. However, in this project's case, we want to combine both services together to mimic the architecture our deployment will have. Instead of deploying the services separately, we want to serve both of them from the same endpoint.

To account for this, we need to set up our Vite app to forward any requests under `/api` to our API service, since they will be sharing the same origin in production.

> This is easily done by tweaking `vite.config.ts` to proxy the `/api` endpoint and forward the request to the expected target.

And lastly, the final preparation for production deployment is setting up out Bun server to be the one that serves the frontend.

We know after building our Vite app, all files are stored in the `dist` directory. We can serve these as static files from our Bun server by setting up a catch-all route (`*`) that serves these static files appropriately (using Hono's `serveStatic` helper function) 


### Zod Schemas
This is not necessarily new for me, but the use of Zod for validation and schema definitions is extremely helpful. Not only can you define and validate the incoming inputs, but you can also make these schema definitions consistent with each other coming from one same source of truth, which can then be adapted and inferred as Typescript types to be used throughout the server for anything that interacts with and needs to know the shape of this data.

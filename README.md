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

### Zod Schemas
This is not necessarily new for me, but the use of Zod for validation and schema definitions is extremely helpful. Not only can you define and validate the incoming inputs, but you can also make these schema definitions consistent with each other coming from one same source of truth, which can then be adapted and inferred as Typescript types to be used throughout the server for anything that interacts with and needs to know the shape of this data.
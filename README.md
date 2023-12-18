# Beer backend

Beer backend - is a lightweight web service used for my React Application named beer-shop.

## Technologies used

- Node.js
- Express.js
- Prisma
- TypeScript

## How to run?

1. Copy the git repository using `git clone [URL]`, where [URL] - url to git repository.
2. Run `npm install` to install all dependencies.
3. Create `.env` file and set all the environment variables. Examples are provided in `.env.example`
4. Run `prisma migrate dev` or `prisma db push` to migrate prisma schema.
5. Uncomment line with `populate()` if you want to populate your db with db provided beer data.
6. Run `npm run dev` to start a localhost
7. Go to `/api/beers`. For now, it's the only API route.
8. Done!

Also, there is a deployed version of this [web service](https://beer-shop-service.onrender.com) on render.

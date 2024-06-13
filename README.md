# Beer backend

Beer backend - is a lightweight web service used for my React Application named beer-shop.

## Technologies used

- Node.js
- Express.js
- Prisma
- TypeScript
- Docker Compose

## How to run?

1. Copy the git repository using `git clone [URL]`, where [URL] - url to git repository.
2. Run `npm install` to install all dependencies.
3. Run `npm run db:dev:up` to start a db.
4. Uncomment line with `populate()` if you want to populate your db with db provided beer data.
5. Run `npm run dev` to start a localhost
6. Go to `/api/beers`. For now, it's the only API route.
7. Done!

Also, there is a deployed version of this [web service](https://beer-shop-service.onrender.com) on render.

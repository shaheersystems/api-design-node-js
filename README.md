# API Analytics Project

## Set up the project:

- Clone this repo `git clone https://github.com/shaheersystems/api-design-node-js.git`
- Change the directory `cd api-design-node-js `
- Install the packages: `npm install`
- Create a .env file on the root level of your directory and enter the following entries:

  Enter a postgresql database url `DATABASE_URL="postgresql://postgres:admin@localhost:5432/db_name"`

  Enter a jwt secret (it can be any value) `JWT_SECRET="secret"`

- Database migration and applying schema to your database: `npx prisma migrate dev`
- Start server: `npm run dev`

Post in issues if you run into any problems.

Front-end repo: [Frontend Repo](https://github.com/shaheergg/api-analytics)

# Little Pompeius
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

![Little Pompeius Landing Page](/little-pompeius.png)

NOTE: This project has been fully developed but not deployed due to limited database instances on Supabase.

## About Little Pompeius

This is a fully-functional restaurant food delivery web application that mimics the functionalites of a real restaurant website. This application allows users to sign in/out, view products, purchase them using secured payment gateway, order tracking, and, order history. Along with these features admins can also edit/delete categories or products, assign each product to a specific category, upload images for each individual product they plan to present to their customers on the website, update delivery status of the food item and many more.
This platform is built using Next.js 15, React, TailwindCSS, PostgreSQL, Supabase, Prisma, NextAuth, Stripe, and more.

## Key Features

- **Stunning UI:** Beautifully designed using TailwindCSS
- **Responsiveness:** Works flawlessly on both desktop and mobile devices
- **Payment Gateway:** Secure Payments using Stripe
- **Editing & Deleting products:** Edit and delete products/category as an admin
- **Product Management:** CRUD operations on various products as an admin
- **Authentication:** Secured the app using NextAuth & Google
- **Database & ORM:** PostgreSQL for robustness & Prisma for database operations
- **PostgreSQL Database:** Utilize Supabase for your PostgreSQL database
- **File Attachments:** Upload images for products as an admin using Cloudinary

## Installation

### Clone the repository
To get started, you'll need to clone this repository to your local machine. You can do this by running the following in the command line:

```bash 
git clone https://github.com/Sumer16/little-pompeius.git 
```

### Install dependencies

Once you've cloned the repository, navigate to the project directory and run npm/yarn install to install all the necessary dependencies.

```bash
cd little-pompeius

npm install
# or
yarn install
```

then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Setup the environment variables

Before starting the developement server make sure you set the env variables properly, create a ```.env``` file in the root of the project and add all necessary API credentials of your own:

```env
DATABASE_URL=your_db_url
DIRECT_URL=your_migration_direct_url

NEXTAUTH_SECRET="Little Pompeius is better than Little Caesars"

GOOGLE_ID=
GOOGLE_SECRET=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

### Setup Prisma

You can use any database of your own choice:

```bash
npx prisma generate
npx prisma db push
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Credits

- [Lama Dev](https://www.youtube.com/@LamaDev) => Thanks for making this amazing tutorial!

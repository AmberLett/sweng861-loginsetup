Login Social Media Service User Guide 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project implements a social media login service using Next.js and NextAuth.json as mentioned. It supports multiple platforms - Google and LinkedIn. It includes a responsive login interface. 

## Getting Started

Install dependencies: 

npm install 

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Features: 
Login using Google or LinkedlIn 
Secure OAuth 2.0 intergration with NextAuth.js 
Responsive and accessible user interface. 
Error handling for login failiures. 

Environemental Setup: 
Create .env.local file in the root of the project: 

GOOGLE_CLIENT_ID= "Personal credentials"
GOOGLE_CLIENT_SECRET="Personal credentials"
LINKEDIN_CLIENT_ID="Personal credentials"
LINKEDIN_CLIENT_SECRET="Personal credentials"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET="Personal credentials"

**Replace the "Personal credentials" with your actual OAuth credentials. 

Running the Project: 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Start the development server with the command below.

npm run dev 

Open http://localhost:3000 to see the app. 

Then click the login buttons to authenticate via Goodle or LinkedIn.

Successfully log out by clicking the red log out button towards the center of the app. 

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

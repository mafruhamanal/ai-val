# Valorant AI Chatbot

An AI Valorant chatbot designed to help players improve their gameplay by providing strategic advice, answering questions, and offering tips and facts based on user queries. The chatbot leverages OpenAI's GPT-4o model for Retrieval Augmented Generation to assist players in refining their skills in areas like aiming, communication, team composition, and utility usage!

# Tech Stack: Next.js, OpenAI, LangChain, Supabase Vector Store, Firebase, Material UI

# Getting Started

Prerequisites

Before you begin, ensure you have the following installed:

Node.js (v14 or later)
npm or Yarn
Installation

Clone the Repository:


git clone https://github.com/your-username/valorant-ai-chatbot.git

cd valorant-ai-chatbot

Install Dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Set Up Environment Variables:

Create a .env.local file in the root directory and add the following environment variables:

```bash
NEXT_PUBLIC_OPENAI_API_KEY=your-openai-api-key

NEXT_PUBLIC_SUPABASE_URL=your-supabase-url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain

NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id

NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id
```

Start the Development Server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The application will be available at http://localhost:3000.

# Deployment
To deploy your application, you can use platforms like Vercel or Netlify.

Build the Application:

npm run build
or
yarn build

Deploy:

Follow the platform-specific instructions for deploying your Next.js application.

Usage

Once the application is running, users can interact with the AI chatbot by asking questions related to Valorant strategies, aiming techniques, and more. The chatbot will provide detailed and helpful responses based on the input.

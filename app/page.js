"use client";

import Head from "next/head";
import "./globals.css";
import Chatbot from "./components/Chatbot";
import { auth } from "./utils/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        setAuthenticated(true);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Val ChatBot</title>
        <meta
          name="description"
          content="Learn more about Valorant with this AI-driven chat bot."
        />
      </Head>
      {authenticated ? <Chatbot /> : null}
    </>
  );
}

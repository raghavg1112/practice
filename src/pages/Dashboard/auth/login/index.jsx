"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";

export default function index() {
  const session = useSession();
  const router = useRouter();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [input, setInput] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const newUser = { ...input };
    newUser[e.target.name] = e.target.value;
    setInput(newUser);
  };
  const handleSubmit = async () => {
    const res = await signIn("credentials", {
      email,
      password,
    });
    if (res) router.push("/dashboard");
  };
  async function emailOtpGenerate() {
    const res = await fetch("/api/auth/login/email_otp_generator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: email,
      },
    });
    if (res.status === 201)
      router.push("/dashboard/auth/login/email_otp_verification");
  }

  async function signInWithGoogle() {
    await signIn("google");
    router.push("/dashboard");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={(e) => {
          handleChange;
        }}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={(e) => {
          handleChange;
        }}
      />
      <Button title="Submit Details" onClick={handleSubmit} />
      <button
        onClick={() => signInWithGoogle()}
        className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>
      <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/auth/register">
        Create new account
      </Link>
    </div>
  );
}

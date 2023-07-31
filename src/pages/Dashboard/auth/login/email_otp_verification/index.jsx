import { Router, useRouter } from "next/router";
import React, { useRef } from "react";

export default function index() {
  const otp_ref = useRef();
  const router = useRouter();
  async function handleSubmit() {
    const otp = otp_ref.current;
    const res = await fetch("/api/auth/login/email_otp_verification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        otp: otp,
      },
    });
    if (res.status == 201 && res.message == "authenticated")
      router.push("api//auth/login/change_password");
    else router.push("/dashboard/auth/login");
  }
  return (
    <>
      <input type="number" />
      <button onClick={handleSubmit} ref={otp_ref}></button>
    </>
  );
}

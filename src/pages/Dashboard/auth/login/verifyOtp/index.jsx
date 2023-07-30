import { Router } from "next/router";
import React, { useRef } from "react";

export default function index() {
  const otp_ref = useRef();
  async function handleSubmit() {
    const otp = otp_ref.current;
    const res = await fetch("/api/auth/login/emailOtpVerify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        otp: otp,
      },
    });
    if (res.status == 201 && res.message == "authenticated")
      Router.push("api//auth/login/changePass");
    else Router.push("/Dashboard/auth/login");
  }
  return (
    <>
      <input type="number" />
      <button onClick={handleSubmit} ref={otp_ref}></button>
    </>
  );
}

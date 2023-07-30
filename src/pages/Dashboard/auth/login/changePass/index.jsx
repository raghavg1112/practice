import { Router } from "next/router";
import React, { useRef, useState } from "react";

export default function App() {
  const pass = useRef();
  const email = useRef();
  const confirm_p = useRef();
  const [error, setError] = useState(0);
  async function handleClick() {
    const password = pass.current;
    const confirm_pass = confirm_p.current;
    if (password != confirm_pass) {
      setError(1);
      return;
    } else {
      setError(0);
    }
    const res = await fetch("/api/auth/login/changePass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: email,
        password: password,
      },
    });
    if (res.status == 201 && res.data.message == "Changed")
      Router.push("/Dashboard/auth/login");
    else Router.push("?Dashboard/auth/login/changePass");
  }
  return (
    <>
      <input type="email" placeholder="email" ref={email} />
      <input type="password" placeholder="Password" ref={pass} />
      <input type="password" placeholder="Confirm Password" ref={confirm_p} />
      <button onClick={handleClick} />
      {error == 1 ? <p>passwords dont match</p> : <p />}
    </>
  );
}

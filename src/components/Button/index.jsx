import { Button, Grid } from "@nextui-org/react";
import Link from "next/link";
export default function App({ title, onClick }) {
  return (
    <>
      <Button onClick={onClick}>{title}</Button>
    </>
  );
}

/*
  import React from 'react'
import { signIn,signOut,useSession } from 'next-auth/react'
import Button from '@/components/Button'
export default function Login() {
    const {data:session}=useSession();
    if (session) {
        return (
          <>
            Signed in as {session.user.email} <br />
            <Button title='Sign out'  {signOut()} >Sign out</Button>
          </>
        )
      }
      return (
        <>
          Not signed in <br />
          <button onClick={async() => await signIn()}>Sign in</button>
        </>
      )
}

*/

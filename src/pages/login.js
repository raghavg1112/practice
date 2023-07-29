import React from 'react'
import { signIn,signOut,useSession } from 'next-auth/react'
import Button from '@/components/Button'
export default function Login() {
    const {data:session}=useSession();

    if (session) {
        return (
          <>
           {JSON.stringify  (session,null,2)}
            <Button title='Sign out' onButtonClick={signOut}>Sign out</Button>
          </>
        )
      }
      return (
        <>

          <Button title='Sign in' onButtonClick={signIn}>Sign in</Button>
        </>
      )
}

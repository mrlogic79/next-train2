"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState } from "react";
import { useRouter } from "next/navigation"

import AuthForm from "../AuthForm";

export default function Login() {

  const [formError, setFormError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setFormError('')

    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if(error){
      setFormError(error.message)
    }
    if(!error){
      router.push('/')
    }
  }

  return (
    // <main>
    //   <h2 className="text-center">Log In</h2>

    //   <AuthForm handleSubmit={handleSubmit}/>

    //   {formError && (
    //     <div className="error">{formError}</div>
    //   )}
    // </main>
    <main>
    <h2 className="text-center">Log In</h2>

    <AuthForm handleSubmit={handleSubmit}/>

    {formError && (
      <div className="error">{formError}</div>
    )}
  </main>

  )
}

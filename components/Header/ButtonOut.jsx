"use client"

import Image from "next/image";
import { signOut } from "next-auth/react"
import { useState } from "react"

export default function ButtonOut() {

  const [loading, setLoading] = useState(false)

  const handleOut = () => {
    setLoading(true)
    setTimeout(() => {
      signOut()
    }, 1500)  
  }

  return (
    <button disabled={loading} className="header__btn-logout" onClick={handleOut}>
      {loading ? (
        <Image priority src="/img/Header/loading_out.svg" alt="Loading" width={30} height={30}/>
      ) : (<span>Выйти</span>)}
    </button>
  )
}

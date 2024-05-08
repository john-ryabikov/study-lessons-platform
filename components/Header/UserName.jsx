"use client"

import { useSession } from "next-auth/react";

export default function UserName() {

    const {data: session} = useSession();

    return (
        <p className="header__acc-name">{session?.user?.name}</p>
    )
    
}

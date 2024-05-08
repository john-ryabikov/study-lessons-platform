import { NextResponse } from "next/server"
import { getUsers } from "@utils/User/prismaUser"

export const dynamic = 'force-dynamic';

export async function GET(req, context){

    const { params } = context
    
    if (params.id === process.env.NEXT_PUBLIC_KEY_SECRET || params.id === process.env.KEY_SECRET) {

        const users = await getUsers()

        return NextResponse.json(users)
    }

    return NextResponse.redirect(new URL("/", req.url))

}

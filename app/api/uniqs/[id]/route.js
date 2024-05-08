import { NextResponse } from "next/server"
import { getUniqs } from "@utils/Uniqecodes/prismaUniqecodes"

export const dynamic = 'force-dynamic';

export async function GET(req, context){

    const { params } = context

    if (params.id === process.env.NEXT_PUBLIC_KEY_SECRET || params.id === process.env.KEY_SECRET) {
        
        const res = await getUniqs()
    
        return NextResponse.json(res)
    
    }

    return NextResponse.redirect(new URL("/", req.url))
}

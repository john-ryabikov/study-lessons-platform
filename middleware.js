export {default} from "next-auth/middleware"

export const config = { 
    matcher: ["/platform", "/platform/:path*"]
}
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials){

                const {email, pass} = credentials

                let BASE_URL = "http://localhost:3000"

                if (process.env.VERCEL_ENV === "production") {
                    BASE_URL = "https://study-platform-azure.vercel.app"
                }
                const res = await fetch(BASE_URL + '/api/users/' + process.env.KEY_SECRET, { 
                    cache: 'no-store'
                })
                const users = await res.json()
                const matchEmailes = users.find((el) => el.userEmail === email)

                if (matchEmailes.userEmail === email && matchEmailes.userPass === pass) {
                    const user = {
                        name: matchEmailes.userName 
                    }
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 24*60*60,
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}

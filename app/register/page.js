import RegisterForm from "@components/RegisterForm/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@app/api/auth/[...nextauth]/route";

export default async function RegisterPage() {

    const session = await getServerSession(authOptions)

    if (session) redirect ("/platform")

    return (
        <main className="main">
            <RegisterForm/>
        </main>
    )
}

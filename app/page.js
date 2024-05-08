import LoginForm from "@components/LoginForm/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {

  const session = await getServerSession(authOptions)

  if (session) redirect ("/platform")

    return (
      <main className="main">
        <LoginForm />
      </main>
    );
}

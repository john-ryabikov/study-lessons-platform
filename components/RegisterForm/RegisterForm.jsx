import Wrapper from "@UI/Wrapper";
import RegisterFormSubmit from "@components/RegisterFormSubmit/RegisterFormSubmit";
import Image from "next/image";

export default async function RegisterForm() {

    let BASE_URL = "http://localhost:3000"


    if (process.env.VERCEL_ENV === "production") {
        BASE_URL = "https://study-lessons-platform.vercel.app"
    }

    const res = await fetch(BASE_URL + "/api/uniqs/" + process.env.KEY_SECRET, {
        cache: 'no-store'
    })
    const uniqs = await res.json()

    return (
        <section className="register">
            <Image className="login__logo" priority src="/img/Header/logo_icon.svg" alt="Study Lessons" width={146} height={48}/>
            <Wrapper>
                <RegisterFormSubmit uniqs={uniqs}/>
            </Wrapper>
        </section>    
    )
}


"use client"

import Wrapper from "@UI/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [imgStatus, setImgStatus] = useState("img/Login/loading.gif")
    const [status, setStatus] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setIsLoading(!isLoading)
        setStatus("Идет проверка...")
        try {
            
            if (!email || !pass) {
                setError("Введите данные для входа!")
                setIsLoading(false)
                return
            }

            const res = await signIn("credentials", {
                email, 
                pass,
                redirect: false
            })

            if (res.error) {
                setError("Вы ввели неверные данные!")
                setIsLoading(false)
                return
            } else {
                setImgStatus("img/Login/done.svg")
                setStatus("Успешно!")
            }

            router.replace("platform")

        } catch (error) {
            alert(error)
        }

    }

    return (
        <section className="login">
            <Image className="login__logo" priority src="/img/Header/logo_icon.svg" alt="Study Lessons" width={146} height={48}/>
            <Wrapper>
                <div className="login__form-cont">
                    <h1 className="login__form-title">Авторизация</h1>
                    <p className="login__form-subtitle">Войдите в систему</p>
                    {error && (
                        <span className="login__error">{error}</span> 
                    )} 
                    <form className="login__form" onSubmit={handleSubmit}>  
                        <input 
                            className="login__form-input" 
                            type="email" 
                            name="user_login" 
                            id="user_login" 
                            placeholder="Введите email" 
                            required
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                        <input 
                            className="login__form-input" 
                            type="password" 
                            name="user_pass" 
                            id="user_pass"
                            placeholder="Введите пароль" 
                            required
                            onChange={(e) => {setPass(e.target.value)}}
                        />
                        <div className="login__load">
                            {isLoading && (
                                <>
                                    <Image className="login__load-img" unoptimized src={imgStatus} alt="Loading" width={24} height={24}/>
                                    <span className="login__load-text">{status}</span>
                                </>
                            )}    
                        </div>
                        <button disabled={isLoading} className="login__form-btn" type="submit">Начать обучение</button>
                    </form>
                    <Link className="login__link" href={"/register"}>Зарегистрироваться</Link>
                </div>       
            </Wrapper>
        </section>
    )
}

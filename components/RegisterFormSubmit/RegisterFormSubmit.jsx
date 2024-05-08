'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@utils/User/prismaUser"; 
import { deleteUniq } from "@utils/Uniqecodes/prismaUniqecodes"; 

export default function RegisterFormSubmit({uniqs, url}) {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [uniq, setUniq] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [imgStatus, setImgStatus] = useState("img/Login/loading.gif")
    const [status, setStatus] = useState("")
    const [error, setError] = useState("")

    const handleReg = async (e) => {
        e.preventDefault()
        setError("")
        setIsLoading(!isLoading)
        setStatus("Идет регистрация пользователя...")
        console.log(url)
        const matchUniqs = uniqs.find((el) => el.codeUniq === uniq)
        try {
            if (pass.length < 6) {
                setIsLoading(false)
                setError("Пароль должен содержать не менее 6 символов!")
                return
            } else if (/^[\u0400-\u04FF]+$/.test(pass)) {
                setIsLoading(false)
                setError("Пароль не должен содержать кирилличиские символы!")
                return
            }

            if (matchUniqs) {
                await deleteUniq(matchUniqs.id)
                await createUser(email, name, pass)
                setImgStatus("img/Login/done.svg")
                setStatus("Успешно!")
                setTimeout(() => {
                    router.replace("/")
                }, 1500)
            } else {
                setIsLoading(false)
                setError("Вы ввели неверный код!")
                return
            }
        } catch (e) {
            alert(e)
        }    
    }

    return (
        <div className="register__form-cont">
            <h1 className="register__form-title">Регистрация</h1>
            <p className="register__form-subtitle">Получите доступ к учебной платформе</p>
            {error && (
                <span className="login__error">{error}</span> 
            )}
            <form className="register__form" onSubmit={handleReg}>
                <input 
                    className="register__form-input" 
                    type="email" 
                    name="user_email" 
                    id="user_email" 
                    placeholder="Ваш email" 
                    required
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                <span className="register__form-hint">Введите свою электронную почту</span>  
                <input 
                    className="register__form-input" 
                    type="text" 
                    name="user_name" 
                    id="user_name" 
                    placeholder="Ваше имя" 
                    required
                    onChange={(e) => {setName(e.target.value)}}
                />
                <span className="register__form-hint">Должен содержать имя пользователя</span>
                <input 
                    className="register__form-input" 
                    type="password" 
                    name="user_pass" 
                    id="user_pass"
                    placeholder="Ваш пароль" 
                    required
                    onChange={(e) => {setPass(e.target.value)}}
                />
                <span className="register__form-hint">Должен содержать латинские буквы и не менее 6 символов</span>
                <input 
                    className="register__form-input" 
                    type="text" 
                    name="user_uinq" 
                    id="user_uniq"
                    placeholder="Код для регистрации" 
                    required
                    onChange={(e) => {setUniq(e.target.value)}}
                />
                <span className="register__form-hint">Код предоставляется организатором курсов</span>
                <div className="register__load">
                    {isLoading && (
                        <>
                            <Image className="register__load-img" unoptimized src={imgStatus} alt="Loading" width={24} height={24}/>
                            <span className="register__load-text">{status}</span>
                        </>
                    )}    
                </div>
                <button disabled={isLoading} className="register__form-btn" type="submit">Зарегистрироваться</button>
            </form>
            <p className="register__link-box">
                <span className="register__link-text">Есть аккаунт?</span>
                <Link className="register__link" href={"/"}>Войдите в систему</Link>
            </p>
        </div>
  )
}

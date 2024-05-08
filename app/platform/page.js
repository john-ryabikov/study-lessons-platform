import Link from "next/link";
import { Suspense } from "react";
import Loading from "@app/loading";

export default async function Platform() {

  return (
    <Suspense fallback={<Loading/>}>
      <main className="main-platform">
          <section className="platform-page">
            <div className="platform-page__cont">
              <h1 className="platform-page__title">Добро пожаловать на учебную платформу</h1>
              <p className="platform-page__text">Вы находитесь на обучающей платформе, рады приветствовать Вас!<br/>Здесь на этом курсе будет открываться доступ к обучающему видеоматериалу, который разбит на несколько модулей.<br/><br/>Желаем приятного и полезного проведения времени!</p>
              <Link className="platform-page__link" href={"/platform/lessons/1"}>Начать обучение</Link> 
            </div>
          </section> 
      </main>
    </Suspense>  
  )
}

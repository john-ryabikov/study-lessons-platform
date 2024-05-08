import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@app/loading";

export default function Lesson({params}) {
  return (
      <main className="main-platform">
          <section className="platform-page">
            <div className="platform-page__cont">
              <h1 className="platform-page__title">Урок №{params.id}</h1>
              <p className="platform-page__text">Здесь в этом уроке будем изучать <strong>Тему №{params.id}</strong>.</p>
              <Suspense fallback={<Loading/>}>
                <Image priority className="platform-page__video" src="/img/Lesson/video_img.jpg" alt={`Урок №${params.id}`} width={620} height={340}/>
              </Suspense>
              {params.id === "1" && <Link className="platform-page__link" href={`/platform/lessons/${Number(params.id) + 1}`}>Следующий урок</Link>}
              {params.id === "6" && <Link className="platform-page__link" href={`/platform/lessons/${Number(params.id) - 1}`}>Предыдущий урок</Link>}
              {Number(params.id) >= 2 && Number(params.id) < 6 && (
                  <div className="platform-page__links">
                      <Link className="platform-page__link" href={`/platform/lessons/${Number(params.id) - 1}`}>Предыдущий урок</Link>
                      <Link className="platform-page__link" href={`/platform/lessons/${Number(params.id) + 1}`}>Следующий урок</Link>
                  </div>
              )}
            </div>
          </section>
      </main>          
  )
}

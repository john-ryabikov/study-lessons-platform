import Image from "next/image";

export default function Loading() {
    return (
        <div className="loading-page">
            <Image className="loading-page__load-img" unoptimized src="/img/Login/loading.gif" alt="Loading" width={24} height={24}/>
            <p className="loading-page__text">Подождите...</p>
        </div>
    )
  }
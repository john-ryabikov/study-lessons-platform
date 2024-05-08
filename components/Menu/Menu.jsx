import Image from "next/image";
import UserName from "@components/Header/UserName";
import ButtonOut from "@components/Header/ButtonOut";
import LinkBox from "@components/Aside/LinkBox";

export default function Menu({openMenu, closeMenu}) {
  return (
    <div className={!openMenu ? "menu" : "menu menu_active"}>
        <button className="menu__close-btn" onClick={closeMenu}>
            <Image priority className="menu__close-btn-icon" src="/img/Icons/close_icon.svg" alt="Назад" width={12} height={12}/>
        </button>
        <div className="menu__acc-box">
            <Image className="header__acc-icon" priority src="/img/Header/user_icon.svg" alt="User" width={30} height={30}/>
            <UserName />
            <ButtonOut />
        </div>
        <div className="menu__aside">
            <nav className="aside__nav">
                <LinkBox closeMenu={closeMenu}/>
            </nav>
        </div>
    </div>
  )
}

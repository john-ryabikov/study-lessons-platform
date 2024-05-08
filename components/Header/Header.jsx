"use client"

import ButtonOut from "./ButtonOut";
import Menu from "@components/Menu/Menu";
import Image from "next/image";
import UserName from "./UserName";
import Link from "next/link";
import { useState } from "react";

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false)

  const closeMenu = () => {
    setOpenMenu(false)
  } 

  return (
    <header className="header">
        <Menu openMenu={openMenu} closeMenu={closeMenu}/>
        <div className="header__cont">
            <Link href={"/platform"}>
              <Image className="header__logo" priority src="/img/Header/logo_icon.svg" alt="Paradise Travel" width={146} height={48}/>
            </Link>
            <div className="header__acc-box">
                <Image className="header__acc-icon" priority src="/img/Header/user_icon.svg" alt="User" width={30} height={30}/>
                <UserName />
                <ButtonOut />
            </div>
            <button className="header__menu-btn" onClick={() => setOpenMenu(!openMenu)}>
                <Image className="header__menu-btn-icon" priority src="/img/Header/menu_icon.svg" alt="Меню" width={50} height={50}/>
            </button>
        </div>
    </header>
  )
}

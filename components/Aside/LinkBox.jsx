"use client"

import Image from "next/image"
import Link from "next/link"
import { links_on, links_off } from "@data/data"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LinkBox({closeMenu}) {

    const [activeIndex, setActiveIndex] = useState(null)

    const openModule = (index) => {
        if (index === activeIndex) setActiveIndex(null)
        else {
            setActiveIndex(index)
        }
    }

    return (
        <>
            {links_on.map((link, i) => (
                <div className={`aside__link-spoiler ${activeIndex === i && "aside__link-spoiler_opened"}`} key={link.id}>
                    <button className={`aside__link-spoiler-button ${activeIndex === i && "aside__link-spoiler-button_opened"}`} onClick={() => openModule(i)}>
                        <p className="aside__link-spoiler-title">
                            <span className={activeIndex === i ? "aside__title-arrow aside__title-arrow_opened" : "aside__title-arrow"}>&#8883;</span>{link.module}
                        </p>
                    </button>
                    <AnimatePresence initial={false}>
                        {activeIndex === i && (
                            <motion.div 
                                initial={{height: 0}}
                                animate={{height: "100px"}}
                                exit={{height: 0}}
                                style={{width: "100%", paddingLeft: 20}}
                            >
                                <p className="aside__link-spoiler-links">
                                    {link.lessons.map((less, i) => (
                                        <Link className="aside__link" key={i} href={`/platform/lessons/${less.id}`} onClick={closeMenu}>{less.title}</Link>
                                    ))}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>    
                </div>
            ))}
            {links_off.map((link, i) => (
                <div className="aside__link-spoiler aside__link-spoiler_lock" key={link.id}>
                    <button className={`aside__link-spoiler-button`}>
                        <p className="aside__link-spoiler-title">
                            <Image className="aside__link-spoiler-lock-icon" priority src="/img/Icons/lock_icon.svg" alt="Lock" width={12} height={14}/>{link.module}
                        </p>
                    </button>
                </div>
            ))}
        </>
    )
}

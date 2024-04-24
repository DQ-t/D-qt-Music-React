'use client'
import Image from "next/image";
import layouts from '@/styles/_modules/Layout.module.scss'
import { useEffect, useState } from "react";

export default function PageBackground() {
    const [scrolling, setScrolling] = useState<boolean>(false)

    // Darken image on scroll
    useEffect(() => {    
        const checkIfScrolling = () =>
            window.scrollY > 100
                ? setScrolling(true)
                : setScrolling(false)

        window.addEventListener('scroll', checkIfScrolling)
        return () => window.removeEventListener('scroll', checkIfScrolling)
    })

    return (
        <div className={`
            ${layouts.page_background}
            ${scrolling ? layouts.is_scrolling : ''}
        `}>
            <Image
                src="/home_1.JPG"
                alt="Page background picture"
                fill
            />
        </div>
    )
}

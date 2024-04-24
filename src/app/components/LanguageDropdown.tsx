"use client"
import footer from '@/styles/_modules/Footer.module.scss'
import button from '@/styles/_modules/Button.module.scss';
import utilities from '@/styles/_modules/Utilities.module.scss'
import Link from "next/link"
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function LanguageDropdown({
    show,
    en,
    nl,
}: {
    show: boolean,
    en: string,
    nl: string,
}): JSX.Element | null {
    const locale = useParams().locale
    const localeClassName = locale === 'en' ? footer.en : footer.nl

    const [hoverDirection, setHoverDirection] = useState<string>(localeClassName)
    const isActiveClass: string | null = show ? utilities.active : null;

    return (
        <ul
            className={`
                ${button.general}
                ${button.secondary}
                ${utilities.toggle_visibility}
                ${isActiveClass}
                ${hoverDirection}
            `}
        >
            <li
                onMouseEnter={() => setHoverDirection(footer.en)}
                onMouseLeave={() => setHoverDirection(localeClassName)}
            >
                <Link href="/en">{en}</Link>
            </li>

            <li
                onMouseEnter={() => setHoverDirection(footer.nl)}
                onMouseLeave={() => setHoverDirection(localeClassName)}
            >
                <Link href="/nl">{nl}</Link>
            </li>
        </ul>
    )
}

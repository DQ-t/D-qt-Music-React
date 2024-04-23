"use client"
import styles from "@/styles/_modules/Footer.module.scss"
import buttons from '@/styles/_modules/Button.module.scss';
import Link from "next/link"

export default function LanguageDropdown({ show, en, nl }: { show: boolean, en: string, nl: string }): JSX.Element | null {
    return (
        <ul className={show ? styles.active : ''}>
            <li className={buttons.button_secondary}>
                <Link href="/en">{en}</Link>
            </li>
            <li className={buttons.button_secondary}>
                <Link href="/nl">{nl}</Link>
            </li>
        </ul>
    )
}

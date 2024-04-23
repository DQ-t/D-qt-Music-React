"use client"
import styles from "@/styles/_modules/Footer.module.scss"
import buttons from '@/styles/_modules/Button.module.scss';
import Link from "next/link"
import { useState } from "react"

function LanguageDropdown({ show, en, nl }: { show: boolean, en: string, nl: string }): JSX.Element | null {
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

export default function Footer({
    title,
    selectLanguage,
    en,
    nl
}: {
    title: string,
    selectLanguage: string,
    en: string,
    nl: string
}): JSX.Element {
    const [showLanguages, setShowLanguages] = useState(false);

    return (
        <footer className={styles.footer}>
            <h5>
                {title}
            </h5>

            <button
                type="button"
                className={buttons.button_primary}
                onClick={() => setShowLanguages(!showLanguages)}
            >
                {selectLanguage}

                <LanguageDropdown
                    show={showLanguages}
                    en={en}
                    nl={nl}
                />
            </button>
        </footer>
    )
}

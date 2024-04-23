"use client"
import styles from "@/styles/_modules/Footer.module.scss"
import buttons from '@/styles/_modules/Button.module.scss';
import { useState } from "react"
import LanguageDropdown from "./LanguageDropdown";

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
            <h5>{title}</h5>

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

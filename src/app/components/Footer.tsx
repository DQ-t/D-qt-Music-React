"use client"
import { useRef } from 'react'
import styles from '@/styles/_modules/Footer.module.scss'
import button from '@/styles/_modules/Button.module.scss';
import LanguageDropdown from '@/components/LanguageDropdown'
import { useDropdown } from '@/hooks/useDropdown';

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
    const dropdownButton = useRef<HTMLButtonElement>(null);
    const [showLanguages, setShowLanguages] = useDropdown(dropdownButton)

    return (
        <footer className={styles.footer}>
            <h5>{title}</h5>

            <button
                ref={dropdownButton}
                type="button"
                className={`${button.general} ${button.primary}`}
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

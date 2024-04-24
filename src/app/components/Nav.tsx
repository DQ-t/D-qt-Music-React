import Image from "next/image";
import styles from '@/styles/_modules/Nav.module.scss';

export default function Nav(): JSX.Element {
    return (
        <nav className={styles.navigation}>
            <Image
                src="/dqt-music-logo.svg"
                alt="Dqt Music Logo"
                width={200}
                height={100}
                className={styles.logo}
            />
        </nav>
    )
}

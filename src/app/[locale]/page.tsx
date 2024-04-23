import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageBackground from "@/components/PageBackground";
import styles from '@/styles/_modules/Layout.module.scss';
import { useTranslations } from "next-intl";

export default function Home(): JSX.Element {
  const t = useTranslations()

  return (
      <>
        <Nav />

        <main className={styles.page_container && styles.main_container}>
          {/*  */}
        </main>

        <Footer
          title={t('footer.title')}
          selectLanguage={t('footer.select-language')}
          en={t('footer.en')}
          nl={t('footer.nl')}
        />

        <PageBackground />
      </>
    );
}

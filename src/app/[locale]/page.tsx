import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageBackground from "@/components/PageBackground";
import Service from "@/components/Service";
import styles from '@/styles/_modules/Layout.module.scss';
import { useTranslations } from "next-intl";

export default function Home(): JSX.Element {
  const t = useTranslations()

  return (
      <>
        <Nav />

        <main className={`${styles.page_container} ${styles.main_container}`}>
          
          {/* Production & Composition Service */}
          <Service
            title={t('production.title')}
            imageSrc="/studio.jpg"
            imageAlt={t('alt.studio')}
            content={t('production.content')}
            contentAdd={t('production.content-add')}
            buttonText={t('production.button')}
            isBadImage
          />

        </main>

        <Footer
          title={t('footer.title')}
          selectLanguage={t('footer.select-language')}
          en={t('footer.en')}
          nl={t('footer.nl')}
        />

        <PageBackground alt={t('alt.page-background')} />
      </>
    );
}

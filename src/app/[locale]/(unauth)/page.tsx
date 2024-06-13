import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import styles from '../../../styles/Home.module.scss';
import Head from 'next/head';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  const t = useTranslations("Index");

  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>      {t('meta_title')}
          </title>
          <meta name="description" content={t('meta_title')} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className={styles.title}>{t('meta_title')}</h1>
          <p className={styles.description}>
            {t('meta_description')}
          </p>
        </main>
      </div>
    </div>
  );
}

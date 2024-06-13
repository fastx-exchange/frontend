import { getTranslations } from 'next-intl/server';
const BaseTemplate = async (props: {
}) => {
  const t = await getTranslations('Dashboard');

  return (
    <>
      <p>
        👋 {t('hello_message')}
      </p>
    </>
  );
};

export { BaseTemplate };

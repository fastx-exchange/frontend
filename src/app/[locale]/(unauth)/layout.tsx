
import LocaleSwitcher from '../../../components/LocaleSwitcher';

export default function Layout(props: { children: React.ReactNode }) {
  // const t = useTranslations('RootLayout');

  return (
    <>
      <div className="">{props.children}</div>
      <LocaleSwitcher />
    </>
  );
}

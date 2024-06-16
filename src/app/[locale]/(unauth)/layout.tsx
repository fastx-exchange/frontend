
import Footer from 'src/components/Footer';
import LocaleSwitcher from '../../../components/LocaleSwitcher';
import Header from 'src/components/Header';

export default function Layout(props: { children: React.ReactNode }) {
  // const t = useTranslations('RootLayout');

  return (
    <>
      <Header />
      <div className="">{props.children}</div>
      <LocaleSwitcher />
      <Footer />
    </>
  );
}

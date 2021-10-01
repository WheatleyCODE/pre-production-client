import Head from 'next/head';
import Link from 'next/link';
import s from '../styles/components/Layout.module.scss';

export interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title = 'Best Site' }) => {
  return (
    <>
      <Head>
        <title>{title} | Nest, Next</title>
      </Head>
      <div className={s.navBar}>
        <div className={s.width}>
          <div className={s.logo} />
          <div>
            <nav className={s.menu}>
              <Link class-name="link" href="/">
                Главная
              </Link>
              <Link class-name="link" href="/login">
                Логин
              </Link>
              <Link class-name="link" href="/login">
                Посты
              </Link>
              <Link class-name="link" href="/login">
                Касты
              </Link>
            </nav>
          </div>
          <div className={s.user} />
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};

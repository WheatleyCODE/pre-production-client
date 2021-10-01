import Head from 'next/head';
import Link from 'next/link';
import s from '@s.components/Layout.module.scss';
import { ActiveLink } from '@UI';

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
          <div className={s.logo}>
            <Link class-name="link" href="/">
              Главная
            </Link>
          </div>
          <div>
            <nav className={s.menu}>
              <ActiveLink className={s.link} href="/">
                Главная
              </ActiveLink>
              <ActiveLink className={s.link} href="/post">
                Посты
              </ActiveLink>
              <ActiveLink className={s.link} href="/cast">
                Касты
              </ActiveLink>
            </nav>
          </div>
          <div className={s.user}>
            <Link class-name="link" href="/login">
              Логин
            </Link>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};

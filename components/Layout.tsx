import Head from 'next/head';
import Image from 'next/image';
import { ActiveLink } from '@UI';
import logo from '../assets/img/logo.png';
import { useActions, useTypedSelector } from '@hooks';
import s from '@s.components/Layout.module.scss';

export interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title = 'Best Site' }) => {
  const { isAuth } = useTypedSelector((state) => state.player);
  const { logout } = useActions();

  return (
    <>
      <Head>
        <title>{title} | Nest, Next</title>
      </Head>
      <div className={s.navBar}>
        <div className={s.width}>
          <div className={s.logo}>
            <ActiveLink className={s.link} href="/">
              <div className={s.img}>
                <Image src={logo} alt="logo" />
              </div>
            </ActiveLink>
            <ActiveLink className={s.logoLink} href="/">
              Spotify Clone
            </ActiveLink>
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
            {isAuth && (
              <>
                <div onClick={() => logout()}>Выйти</div>
              </>
            )}
            {!isAuth && (
              <>
                <ActiveLink className={s.link} href="/login">
                  Войти
                </ActiveLink>
                <ActiveLink className={s.link} href="/register">
                  Зарегистрироваться
                </ActiveLink>
              </>
            )}
          </div>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};

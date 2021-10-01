import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

interface ActiveLinkProps {
  href: string;
  className: string;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({ children, href, className }) => {
  const router = useRouter();
  const style = {
    color: router.asPath === href ? ' rgb(0, 191, 0)' : '#000',
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a className={className} href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};

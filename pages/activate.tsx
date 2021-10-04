import { useTypedSelector } from '@hooks';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Activate: NextPage = () => {
  const { user } = useTypedSelector((state) => state.player);
  const router = useRouter();

  useEffect(() => {
    if (user.isActivated === undefined) {
      router.push('/');
    }
    if (user.isActivated) {
      router.push('/');
    }
  }, []);

  if (user.isActivated === undefined) return null;
  if (user.isActivated) return null;

  return (
    <div>
      <h2>На вашу почту было оправлено письмо с активацией аккаунта</h2>
    </div>
  );
};

export default Activate;

import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import s from '@s.pages/index.module.scss';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={s.main}>
      <div className={s.title}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            },
          }}
        >
          <h1 className="title">Spotify Clone</h1>
        </motion.div>
        <h2>Эта страница должна заитересовать пользователя, да?</h2>
        <h3 onClick={() => router.push('/tracks')} className="title">
          {'Треки >'}
        </h3>
      </div>
    </div>
  );
};

export default Home;

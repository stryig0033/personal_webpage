import dynamic from 'next/dynamic';
import {FC, memo, useEffect} from 'react';
import {useRouter} from 'next/router';
import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import {homePageMeta} from '../data/data';
import ReactGA from 'react-ga4';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

// ページトラッキング用のカスタムフック
const usePageTracking = () => {
  const router = useRouter();

  useEffect(() => {
    // Google Analytics 測定 ID を初期化
    ReactGA.initialize('G-RNK4Y2MNLX');

    // 初回レンダリングとルート変更時にトラッキング
    const handleRouteChange = (url: string) => {
      ReactGA.send({
        hitType: 'pageview',
        page: url,
     });
   };

    // 初期ページビュー
    handleRouteChange(router.asPath);

    // ルート変更イベントの監視
    router.events.on('routeChangeComplete', handleRouteChange);

    // クリーンアップ
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
   };
 }, [router]);
};

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;

  // ページトラッキングを有効化
  usePageTracking();

  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;

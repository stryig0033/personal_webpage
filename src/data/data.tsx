import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

//import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
//import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
//import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
//import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
//import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
//import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
//import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
//import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
//import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
//import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
//import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tomoki Takata personal page',
  description: "personal resume site of Tomoki Takata, created with React Resume sample",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Welcome!`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        髙田 智生(たかた ともき)と申します。東京大学大学院工学系研究科の修士課程に在籍中。
        AIの環境問題への応用方法について研究開発をしています。
        また、フリーランスでAI/webエンジニアやデータアナリストをしています。
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        音楽、釣り、海鮮料理、お酒、ドライブ、言語学習が大好き。
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://stryig.com/resume.html',
      text: 'CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `兵庫県神戸市出身。地元の県立高校を経て、2020年に神戸大学経済学部経済学科入学。
  大学では経済理論や数理解析手法を学んだ後、2022年夏よりデンマークのAarhus Universityへ交換留学し、本格的に情報工学の学習を開始。
  帰国後、東京大学大学院工学系研究科に合格し2024年4月より在学予定。現在はフリーランスエンジニアとして活動中。`,
  aboutItems: [
    {label: 'Location', text: '東京 / 神戸', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Study', text: '東京大学大学院工学系研究科 技術経営戦略学専攻 1年', Icon: AcademicCapIcon},
    {label: 'Interests', text: 'AIモデル開発、Webアプリケーション開発、統計解析', Icon: SparklesIcon},
    /*{label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},*/
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: '日本語',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Dansk',
        level: 2,
      },
      {
        name: '中文',
        level: 2,
      }
    ],
  },
  {
    name: 'Coding Languages',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'R',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 4,
      },
      {
        name: 'next.js',
        level: 4,
      },
    ],
  },
  {
    name: 'Academic Knowledge',
    skills: [
      {
        name: 'Mathematical Statistics',
        level: 8,
      },
      {
        name: 'Econometrics',
        level: 8,
      },
      {
        name: 'Machine Learning',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'OpenAI-APIを用いたLINEbot',
    description: '定期的に最新論文の要約情報を送信してくれるLINEbotとその運用環境を構築しました。',
    url: 'https://blog.stryig.com/2024/01/line_arxive_bot/',
    image: porfolioImage1,
  },
  {
    title: 'MLflowによる機械学習モデルの学習フロー全自動化',
    description: 'AWS上にMLflowサーバを構築し、機械学習モデルの学習→最良モデル選択→性能可視化までを全自動で行う仕組みを作成しました。',
    url: 'https://blog.stryig.com/2024/01/mlflow_automation/',
    image: porfolioImage2,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020年4月~2024年3月',
    location: '',
    title: '神戸大学 経済学部経済学科',
    content: <p>計量経済学・数理統計学専攻　神戸大学KooBee営業部　IFEEKプログラム13期生</p>,
  },
  {
    date: '2022年8月~2023年6月',
    location: '',
    title: 'School of Business and Social Science, Aarhus University, Denmark',
    content: <p>交換留学(1年)　計量経済学・機械学習・ファイナンス・マネジメント</p>,
  },
  {
    date: '2024年4月~2026年3月(卒業予定)',
    location: '',
    title: '東京大学大学院 工学系研究科 技術経営戦略学専攻',
    content: <p>情報工学・環境工学専攻　Long研究室所属</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2021年2月~2022年8月(1.5年)',
    location: 'New Balance Japan',
    title: 'クライアントアドバイザー',
    content: (
      <p>接客販売と店舗モデル</p>
    ),
  },
  {
    date: '2022年12月~現在',
    location: 'フリーランス',
    title: 'Webエンジニア',
    content: (
      <p>シフト自動作成システムやスクレイピングシステムの開発</p>
    ),
  },
  {
    date: '2023年9月~2024年2月(5ヵ月)',
    location: '株式会社フェロースクラム',
    title: 'インターンシップ(機械学習エンジニア)',
    content: (
      <p>機械学習モデルの開発とクラウドコンピューティング</p>
    ),
  },
  {
    date: '2024年2月~現在',
    location: 'ライト株式会社',
    title: 'インターンシップ(ソフトウェアエンジニア)',
    content: (
      <p>フロントエンド開発</p>
    ),
  },
]

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: '連絡先と各種ソーシャルメディア',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: '000stryg@gmail.com',
      href: 'mailto:000stryig@gmail.com',
    },
    {
      type: ContactType.Twitter,
      text: '@ofjaojfoaj',
      href: 'https://www.twitter.com/ofjaojfoaj/',
    },
    {
      type: ContactType.Github,
      text: 'stryig0033',
      href: 'https://github.com/stryig0033',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Tomoki Takata',
      href: 'https://www.linkedin.com/in/03tomokitakata/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [

];

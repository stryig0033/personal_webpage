import { FC, memo } from 'react';

interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
  linkText?: string;
}

const ProjectCard: FC<Project> = memo(
  ({title, description, image, link, linkText}) => {
    return (
      <div className="flex flex-col gap-y-2 p-4 bg-gray-800 rounded-lg mb-4">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
        )}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {linkText || 'リンクを開く'}
          </a>
        )}
      </div>
    );
  }
);

const ProjectList: FC = memo(() => {
  const projects: Project[] = [
    {
      title: 'OpenAI-APIを用いたLINEbot',
      description:
        '定期的に最新論文の要約情報を送信してくれるLINEbotをpythonで実装し、その運用環境をGoogle Cloud Platform上で構築しました。',
      image: '',
      link: 'https://github.com/stryig0033/LINE-bot-arxiv',
      linkText: 'Githubリポジトリを開く',
    },
    {
      title: 'MLflowによる機械学習モデルの学習フロー全自動化',
      description:
        'AWS上にMLflowサーバを構築し、機械学習モデルの学習→最良モデル選択→性能可視化までを全自動で行う仕組みを作成しました。',
      image: '',
      link: 'https://github.com/stryig0033/PredFlow',
      linkText: 'Githubリポジトリを開く',
    },
    {
      title: 'GithubAPIを用いたrepository検索システムのフルスタック開発',
      description:
        'GithubAPIを用いて、特定のユーザーのrepositoryを検索するシステムを作成しました。',
      image: '',
      link: 'https://github.com/stryig0033/git_repo_search_engine',
      linkText: 'Githubリポジトリを開く',
    },
    {
      title: '大規模人流データ解析のためのパイプライン作成に関する記事寄稿',
      description: '調整中',
      image: '',
      link: '',
      linkText: 'Qiita記事を開く',
    },
    {
      title: 'SAS Viyaを用いた機械学習モデルの適用と課題に関する記事寄稿',
      description: '調整中',
      image: '',
      link: '',
      linkText: 'Qiita記事を開く',
    },
  ];

  return (
    <div className="flex flex-col gap-y-4 px-4 py-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
});

const Home: FC = memo(() => {
  return (
    <div className="flex flex-col gap-y-8">
      <h1 className="self-center text-4xl font-bold py-8 text-white">
        My Works
      </h1>
      <h2 className="text-white text-center text-xl">
        <a>ここでは、これまでの制作物や担当した案件を紹介しています。</a>
      </h2>
      <ProjectList />
    </div>
  );
});

export default Home;
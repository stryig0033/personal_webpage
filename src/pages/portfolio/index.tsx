import {FC, memo} from 'react';

const Home: FC = memo(() => {
  return (
      <div className="flex flex-col gap-y-8">
        <h1 className="self-center text-2xl font-bold text-white">
          My portfolio
        </h1>
        <h2 className="text-white text-center text-xl">
          <a>ここでは、これまでに作成したサービスや担当した案件を紹介しています。</a>
        </h2>
      </div>
  );
});

export default Home;
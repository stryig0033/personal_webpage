/* eslint-env node */

const nextConfig = {

  // Webpackのカスタム設定
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next 12が複数のTSローダーを持っているため、それらすべてを更新する。
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));

    tsRules.forEach(rule => {
      // eslint-disable-next-line no-param-reassign
      rule.include = undefined;
    });

    return config;
  },

  // 圧縮の有効化
  compress: true,

  // ETagの生成
  generateEtags: true,

  // ページの拡張子
  pageExtensions: ['tsx', 'mdx', 'ts'],

  // X-Powered-Byヘッダーを無効化
  poweredByHeader: false,

  // ブラウザソースマップの無効化
  productionBrowserSourceMaps: false,

  // 厳格なReactモードの有効化
  reactStrictMode: true,

  // SWCの最小化
  swcMinify: true,

  // 末尾スラッシュの無効化
  trailingSlash: false,

  // 画像の設定
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },{
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },

};

module.exports = nextConfig;


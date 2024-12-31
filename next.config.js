/* eslint-env node */
/** @type {import('next').NextConfig} */

const nextConfig = {

  // 静的エクスポートを有効化 (Next.js 13.3+)
  output: 'export',

  // Webpackのカスタム設定
  webpack: (config) => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next 12が複数のTSローダーを持っているため、それらすべてを更新
    const tsRules = oneOfRule.oneOf.filter(
      rule => rule.test && rule.test.toString().includes('tsx|ts')
    );
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

  // 厳格なReactモード
  reactStrictMode: true,

  // SWCの最小化
  swcMinify: true,

  // 末尾スラッシュの無効化
  trailingSlash: false,

  // images 設定を削除 or unoptimized だけ設定
  images: {
    // remotePatterns: [...], ← 削除
    unoptimized: true,
  },

};

module.exports = nextConfig;


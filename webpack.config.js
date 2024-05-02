const path = require('path');

module.exports = {
  entry: './src/pages/index.tsx', // エントリーポイントのファイル
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|mp4)$/i, // 画像ファイルとMP4ファイルに一致する正規表現
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets' // 出力ディレクトリ
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
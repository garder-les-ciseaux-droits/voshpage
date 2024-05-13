const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images/', // Папка, куда будут складываться обработанные изображения
              name: '[name].[ext]', // Формат имени файлов
              publicPath: 'assets/images/' // Публичный путь, который будет использоваться в URL изображений
            }
          }
        ]
      }
    ]
  }
};

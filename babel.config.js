module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@store': './src/store',
          '@services': './src/services',
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};

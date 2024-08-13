module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', 'js', '.svg', '.jsx'],
        alias: {
          '@authScreens': './src/screens/Auth',
          '@appScreens': './src/screens/App',
          '@components': './src/components',
          '@Images': 'src/assets/images',
          '@Icons': 'src/assets/icons',
          '@exporter': 'src/shared/exporter',
          '@assets': 'src/assets',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],

    'react-native-reanimated/plugin',
  ],
};

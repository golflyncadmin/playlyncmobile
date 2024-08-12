const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

module.exports = mergeConfig(defaultConfig, {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    // Ensure SVG files are treated as source code for transformation
    sourceExts: [...sourceExts, 'svg'],
    // Optional: Prevent treating SVG files as assets (if desired)
    assetExts: assetExts.filter(ext => ext !== 'svg'),
  },
});

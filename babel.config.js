<<<<<<< HEAD
module.exports = function(api) {
=======
module.exports = function (api) {
>>>>>>> 720386fd9cd3e896d7c32b3a5a043d6742f79cc9
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [require.resolve("expo-router/babel"), "module:react-native-dotenv"],
  };
<<<<<<< HEAD
};
=======
};
>>>>>>> 720386fd9cd3e896d7c32b3a5a043d6742f79cc9

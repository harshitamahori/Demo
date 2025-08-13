module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",  //is a plugin that enables NativeWind to parse and apply class names properly.
    ],
  };
};

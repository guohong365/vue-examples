module.exports = {
  //runtimeCompile: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "昆明交运集团大数据演示";
      return args;
    });
  },
  css: {
    requireModuleExtension: false,
  },
};

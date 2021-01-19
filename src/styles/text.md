# saaa-resource-loader
> 全局配置变量，项目种的scss文件均可使用变量和方法，无需再次单独引入， 将文件 引入到全局
- 安装
```
npm eject 可以将react 项目中的config文件外露
npm install sass-resources-loader -D 
```
```
{
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
    },
    'sass-loader'
  ).concat(
    {
      loader: "sass-resources-loader",
      options: {
        resources: [
          path.resolve(__dirname, "../src/styles/main.scss")
        ]
      }
    }
  ),
  sideEffects: true,
},
```
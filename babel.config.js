/*
 * @Descripttion: babel配置文件
 * @Author: Maorui
 * @Date: 2020-11-11 16:35:40
 * @LastEditTime: 2020-11-13 14:05:18
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};

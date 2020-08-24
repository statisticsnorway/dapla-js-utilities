module.exports = {
  plugins: ['@babel/plugin-proposal-export-default-from'],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          node: 'current'
        }
      }
    ],
    ['@babel/preset-react']
  ],
  env: {
    test: {
      plugins: [
        ['@babel/plugin-transform-modules-commonjs', {}],
        'transform-es2015-modules-commonjs'
      ]
    }
  }
}

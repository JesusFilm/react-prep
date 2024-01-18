const babelConfig = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    'next/babel',
  ],
}

module.exports = babelConfig
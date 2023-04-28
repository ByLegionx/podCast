module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.css$': 'jest-transform-css',
      }
};
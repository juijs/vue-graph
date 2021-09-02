module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: {
                    version: 3.8,
                    proposals: true,
                },
                shippedProposals: true,
                targets: { chrome: '69' },
            },
        ],
        '@vue/babel-preset-jsx',
    ],
    env: {
        production: {
            presets: [['minify', { builtIns: false }]],
        },
    },
    plugins: ['@babel/plugin-syntax-jsx'],
    exclude: [/\/core-js\//],
};
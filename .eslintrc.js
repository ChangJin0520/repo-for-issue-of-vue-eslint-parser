module.exports = {
    env: {
        browser: true,
        node: true,
    },
    // plugins: ['vue'],
    // extends: [
    //     'plugin:vue/recommended',
    // ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json'],
    },
    // settings: {
    //     'import/extensions': ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.vue']
    // },
    rules: {
        'no-undef': 2,
    }
};

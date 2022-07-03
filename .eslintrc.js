module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:prettier-vue/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'prettier-vue/prettier': [
      'error',
      {
        // @see https://prettier.io/docs/en/options.html
        printWidth: 100,
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
        pugSingleQuote: false,
        pugAttributeSeparator: 'none',
        endOfLine: 'lf',
      },
    ],
  },
  settings: {
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        template: true,
        script: true,
        style: true,

        // Settings for how to process custom blocks
        customBlocks: {
          // Treat the `<docs>` block as a `.markdown` file
          docs: { lang: 'markdown' },

          // Treat the `<config>` block as a `.json` file
          config: { lang: 'json' },

          // Treat the `<module>` block as a `.js` file
          module: { lang: 'js' },

          // Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
          comments: false,

          // Other custom blocks that are not listed here will be ignored
        },
      },

      // Use prettierrc for prettier options or not (default: `true`)
      usePrettierrc: false,

      // Set the options for `prettier.getFileInfo`.
      // @see https://prettier.io/docs/en/api.html#prettiergetfileinfofilepath-options
      fileInfoOptions: {
        ignorePath: '.prettierignore',
        withNodeModules: false,
      },
    },
  },
}

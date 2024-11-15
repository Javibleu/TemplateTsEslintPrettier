import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ ignores: ['node_modules', 'dist', 'build', 'coverage', 'temp', 'tmp', 'vendor'] },
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ languageOptions: { globals: globals.node } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,

	{
		rules: {
			'prettier/prettier': [
				'error',
				{
					arrowParens: 'always',
					bracketSpacing: true,
					endOfLine: 'auto',
					htmlWhitespaceSensitivity: 'css',
					insertPragma: false,
					singleAttributePerLine: false,
					bracketSameLine: false,
					jsxSingleQuote: false,
					printWidth: 120,
					proseWrap: 'preserve',
					quoteProps: 'as-needed',
					requirePragma: false,
					semi: true,
					singleQuote: true,
					tabWidth: 2,
					trailingComma: 'es5',
					useTabs: true,
					embeddedLanguageFormatting: 'auto',
					vueIndentScriptAndStyle: false,
					experimentalTernaries: false,
					enableDegugLogs: false,
				},
			],
		},
	},
];

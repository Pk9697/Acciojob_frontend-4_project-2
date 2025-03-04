module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		semi: 0,
		'import/no-extraneous-dependencies': 0,
		'react/react-in-jsx-scope': 0,
		'linebreak-style': 0,
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 0,
		'comma-dangle': 0,
		'react-hooks/exhaustive-deps': 0,
		'react/no-array-index-key': 0,
	},
}

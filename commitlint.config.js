module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(feat|chore|fix|docs|style|refactor|perf|test|build|ci|revert|other):\s*(.+)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  rules: {
    'header-match-team-pattern': [2, 'always'],
    'header-min-length': [2, 'always', 15],
    'header-max-length': [2, 'always', 100],
    'type-enum': [
      2,
      'always',
      ['feat', 'chore', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'revert', 'other'],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
  },
  plugins: [
    {
      rules: {
        'header-match-team-pattern': (parsed) => {
          const { type, subject } = parsed
          if (type && subject) {
            return [true, 'Commit message format is correct']
          }
          return [false, 'Commit message format is incorrect. It should be "<type>: <subject>"']
        },
      },
    },
  ],
}

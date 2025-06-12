module.exports = {
  '*.{js,jsx,ts,tsx}': (files) => [
    `bunx eslint --ext .ts,.tsx --fix --max-warnings=0 ${files.join(' ')}`,
    `bunx prettier --write ${files.join(' ')}`,
  ],
  '*.{json,css,scss,md}': (files) => [`bunx prettier --write ${files.join(' ')}`],
}

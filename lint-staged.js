module.exports = {
    "src/**/*.+(json|ts|tsx)": [
    "eslint"
  ],
  "src/**/*.{ts,tsx,json,css,scss,md}": [
    "prettier --write"
  ]
}
/* eslint-disable prettier/prettier */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
  "parser": "@babel/eslint-parser",
    "extends": ['standard', 'prettier'],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ['prettier'],
    "rules": {
        'prettier/prettier': 'error'
    }
}

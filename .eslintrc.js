module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "allowImportExportEverywhere": true,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6":     true,
        "browser": true,
        "node":    true,
    },
    "plugins": [
        "meteor",
        "react"
    ],
    "extends": ["eslint:recommended", "plugin:meteor/recommended", "plugin:react/recommended"],
    "settings": {
        "import/resolver": "meteor"
    },
    "rules": {
        "react/jsx-filename-extension": [1, {
            "extensions": [".jsx"]
        }],
        "react/jsx-no-bind": [2, {
            "ignoreRefs": false,
            "allowArrowFunctions": false,
            "allowFunctions": false,
            "allowBind": false
        }],
        "max-len": [0, {code: 100}],
        "import/no-absolute-path": [0],
        "meteor/audit-argument-checks": [0],
        "indent": ["error", 4],
        "switch-colon-spacing": [0],
        "no-invalid-this": [0],
        "new-cap": [1],
        "no-trailing-spaces": [2, {
            skipBlankLines: true
        }],
    },
    "overrides": {
        files: "*.js,*.jsx",
    }
};
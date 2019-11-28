module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb",
        "plugin:react/recommended",
        // "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:import/errors"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": ["tsx"] }],
        "react-hooks/rules-of-hooks": "error",
        // "react-hooks/exhaustive-deps": "warn"
    },
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    }
};
module.exports = {
    "extends": "google",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-dangle": 0,
        "react/jsx-uses-vars": 1,
        "react/display-name": 1,
        "no-unused-vars": "warn",
        "no-console": 0,
        "no-unexpected-multiline": "warn",
        "max-len": [1, 80, 2, {
            "ignoreTemplateLiterals": true,
            "ignoreStrings": true
        }],
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": false,
                "MethodDefinition": false,
                "ClassDeclaration": false,
                "ArrowFunctionExpression": false,
                "FunctionExpression": false
            }
        }]
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.6.1"
        }
    }  
};
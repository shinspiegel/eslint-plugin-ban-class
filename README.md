# eslint-plugin-ban-class

Ban named specific class

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-ban-class`:

```sh
npm install eslint-plugin-ban-class --save-dev
```

## Usage

Add `ban-class` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["ban-class"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "ban-class/ban-class": ["error", { "banned": ["Date"] }]
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                 | Description                                  |
| :----------------------------------- | :------------------------------------------- |
| [ban-class](docs/rules/ban-class.md) | Define classes to be banned from the project |

<!-- end auto-generated rules list -->

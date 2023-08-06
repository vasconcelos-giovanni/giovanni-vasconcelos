# Giovanni Vasconcelos

## 📚 My learning Journey

Throughout this project, I had the opportunity to explore new concepts:

- Bootstrap grid system;

## Getting Started
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Documentation

### Instructions for languages files

#### Division by Layouts and Views

The keys tree begins with "layout" and "views" keys and are organized starting from it.

```json
{
  "layouts": {
    "LayoutOne": {},
    "LayoutTwo": {}
  },
  "views": {
    "ViewOne": {},
    "ViewTwo": {}
  }
```

#### Articles

Articles must always be sufixed by "Article".

```json
"oneArticle": {
  "oneSection": {}
}

```
#### Sections

Sections must always be sufixed by "Section".

It must always be within articles.

It must have at least a heading and paragraphs which have to be named initializing with "p" and finalizing with its number in the paragraphs tree.

```json
"articleOne": {
  "oneSection": {
      "heading": "Heading",
      "p0": "First paragraph.",
      "p1": "Second paragraph"
  }
}
```

#### Lists

Lists should be keys suffixed with "Ul" or "Ol" and have its items initializing with or being suffixed with "li", respecting the proper case and the context whether its make sense to additional prefixation, and finalizing with its index.

```json
"fruitsUl": {
  "li0": "Banana"
}

"languagesUl": {
  "enLi0": "English",
  "esLi1": "Spanish"
}
```
# Giovanni Vasconcelos Portfolio: Showcasing Achievements with Elegance

## 📌 Project idea

Giovanni Vasconcelos Portfolio is an embodiment of my professional journey, meticulously crafted to exhibit my resume and projects within an alluring and contemporary digital space.

## 💡 Key Features

✅ Bilingual Experience: Seamlessly switch between English and Portuguese to cater to a diverse audience;

✅ Universal Adaptability: Ensuring an optimal user experience across a spectrum of devices and screen sizes.

## 🔧 Technologies

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

## 🏗️ Development Details

Conceptualized as a Single Page Application (SPA), I harnessed the power of the Axios library for streamlined HTTP requests. The I18N library was instrumental in achieving seamless internationalization, and the GitHub API seamlessly integrates to spotlight a curated selection of projects.

## 📚 My Learning Journey

The journey of crafting Giovanni Vasconcelos Portfolio has been a transformative experience that has enriched my skill set and knowledge in several key areas:

📌 Mastery of the Bootstrap grid system, underpinning impeccable responsiveness.

📌 Skillful application of internationalization techniques for fluid multilingual translation.

📌 Expertise in harnessing third-party APIs, amplifying the website's capabilities.

📌 Proficiency in Vue.js Composition API, unlocking dynamic and efficient web development.

📌 Crafting efficient functions to fetch, score, and sort repositories dynamically from the GitHub API, demonstrating a solid understanding of asynchronous programming and data manipulation.

📌 Utilizing Axios to perform streamlined HTTP requests, showcasing proficiency in integrating external data sources.

📌 Implementing topic-based scoring and sorting algorithms to dynamically arrange repositories in a meaningful order, showcasing problem-solving skills and algorithmic thinking.

This journey has not only allowed me to create an elegant and functional portfolio but has also deepened my understanding of modern web development practices, software architecture, and effective communication of technical concepts.

## Documentation

### Getting Started

#### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

#### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

#### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

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
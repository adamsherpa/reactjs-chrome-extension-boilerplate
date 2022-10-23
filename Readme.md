# ReactJS Chrome Extension

- [x] Webpack Compatible
- [x] TailwindCSS 3.0 Compatible

## Instructions

- Download/install `node`.
- `npm i -g pnpm` to install pnpm
- `pnpm install` to download dependencies
- `pnpm build` to begin build and watch for changes
- Try to edit in the `src/` folder. This extension is based on react using typescript.

## For Reference

- Chrome Extension Using React [Link](<https://meerkat-citronella.github.io/jekyll/update/2020/10/01/welcome-to-jekyll.html>)

- Chrome Manifest v3 [Link](<https://developer.chrome.com/docs/extensions/mv3/mv3-migration/>)

    1. Extension General Overview [Link](https://developer.chrome.com/docs/extensions/mv3/overview/)

### Using DOM nodes to insert dynamic content [Link](https://developer.chrome.com/docs/extensions/mv3/security/#document_write)

```javascript
function constructDOM() {
  let newTitle = document.createElement('h1');
  newTitle.innerText = host;
  document.appendChild(newTitle);
}
```

 1. 

Base template credit to <https://bit.ly/manshu>

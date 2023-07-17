# Config files of Webpack, Rollup, and Parcel

The config files of the modern JS boundlers:

- Webpack
- Rollup
- Parcel

to comile/boundle

- ES modules
- TypeScript
- React
- React+TypeScript

## Commands

### Webpack

```bash
yarn webpack # src/index.js -> dist/webpack.js
yarn webpack-ts # src/index.ts -> dist/webpack-ts.js
yarn webpack-react # src/index.jsx -> dist/webpack-react.js
yarn webpack-react-ts # src/index.tsx -> dist/webpack-react-ts.js
```

### Rollup

```bash
yarn rollup # src/index.js -> dist/rollup.js
yarn rollup-ts # src/index.ts -> dist/rollup-ts.js
yarn rollup-react # src/index.jsx -> dist/rollup-react.js
yarn rollup-react-ts # src/index.tsx -> dist/rollup-react-ts.js
```

> When `index.ts` and `index.tsx` files are located under the same directory, Rollup compile/boundle `index.ts` even though you set the `input: './src/index.tsx'` in the config. I cannot find a way around. When I changed the file name from `index.tsx` to `test.tsx` and the input value accordingly, the boundling worked fine.

### Parcel

```bash
# src/index.js -> dist/parcel.js
# src/index.ts -> dist/parcel-ts.js
# src/index.jsx -> dist/parcel-react.js
# src/index.tsx -> dist/parcel-react-ts.js
yarn parcel
```

## Check

To see if your React working, open the HTML files in the `html` directory in the browser. You don’t have to run the web server. Simply open them as a local file.

## Resources

- [TypeScript config](https://www.typescriptlang.org/tsconfig)
- [Add React to existing project](https://react.dev/learn/add-react-to-an-existing-project)
- [Babel Installation](https://babeljs.io/setup#installation)
- [Webpack - Getting started](https://webpack.js.org/guides/getting-started/)
- [Rollup - Tutorial](https://rollupjs.org/tutorial/)
- [Parcel - Getting started](https://parceljs.org/getting-started/library/)

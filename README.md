<h1 align="center">React Performance Optimization v1 👨‍💻</h1>

This is a repo that teaches you how to perform React app optimization. The core idea is from [React Optimization Cookbook](https://egghead.io/courses/react-optimization-cookbook-d67d54ba).

## What does this repo do in detail?

- Demonstrate how lodash debounce helps on some necessary event that fires frequently
  - useMouse.js
- Demonstrate how react-window helps on long list
  - NewsCard.js
- Treeshaking
  - There is something you can do while there is something you should leave with your bundler (webpack / parcel). For example, in `useMouse.js`, you can import lodash as below
  - Look into the bundler and ignore transpiling modules to CommonJS
  - Add sideEffect to your modules (for webpack) if needed
  - Use `import debounce from 'lodash/debounce';` instead of `import { debounce } from 'lodash';`
- Use case of BundlerAnalyzerPlugin (inside `webpack.config.js`)
- Containerization of state within child component
  - We should manage the child component's internal state inside the component itself but not put it into the parent component. Otherwise, when the parent component is re-rendered, all of the child component will be re-rendered as well. Prioritize this approach before you try to use `React.Memo()`
- Better profiling for Production build (inside `webpack.config.js`)
- React.useMemo()
  - page/Dashboard.js
- What did you render package
  - page/Product.js (memoStyle)

## Prerequisites

- Have a fundamental understanding on Javascript, especially React.

## System Requirements

- git v2 or greater
- npm v6 or greater
- Node.js v16 or greater

All of the above requirements should be set in your OS Path. Run below commands to verify.

```bash
git --version
npm --version
node --version
```

## Running the web application

```npm
npm run dev
```

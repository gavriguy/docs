---
description: >-
  The plugin-docusaurus plugin allows you to index the content of your Docusaurus websites
  and offer text search to your visitors.
---

# Docusaurus Plugin

<h3 className="plugin-description">{frontMatter.description}</h3>

## Installation

You can install the plugin using any major Node.js/Bun package manager:

```bash title="Using npm"
npm install --save @lyrasearch/plugin-docusaurus
```

```bash title="Using yarn"
yarn add @lyrasearch/plugin-docusaurus
```

```bash title="Using pnpm"
pnpm add @lyrasearch/plugin-docusaurus
```

## Usage

Add the plugin to your `docusaurus.config.js`:

```js
{
  /* ... */

  plugins: ["@lyrasearch/plugin-docusaurus"],

  /* ... */
}
```

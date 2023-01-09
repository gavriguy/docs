---
sidebar_label: Migration guide to v0.4.0
sidebar_position: 2
---

# Migration guide to v0.4.0

Lyra `v0.4.0` introduces a few breaking changes. This guide will help you migrate your codebase.
The breaking changes are minimal, and should be easy to fix.

If you find any major problem, please feel free to open an issue at [https://github.com/lyrasearch/lyra](https://github.com/lyrasearch/lyra).

## Upgrading Lyra

Upgrading Lyra is as simple as updating the version in your `package.json` file:

```json
{
  "dependencies": {
    "@lyrasearch/lyra": "0.4.0"
  }
}
```

or by running the following command:

```bash
npm install @lyrasearch/lyra@0.4.0
```

```bash
yarn add @lyrasearch/lyra@0.4.0
```

```bash
pnpm add @lyrasearch/lyra@0.4.0
```

Once you've updated the version, you can start migrating your codebase.

## Breaking changes

Lyra `v0.4.0` introduces the following breaking changes:

- All the Lyra methods are now async
- CommonJS is supported via `@lyrasearch/lyra/cjs` instead of `@lyrasearch/lyra`
- Default IDs

### Async methods

With `v0.3.1` and below, Lyra methods were synchronous. This meant that you could use them like this:

```js
import { create, insert, search } from "@lyrasearch/lyra";

const db = create({
  schema: {
    quote: "string",
    author: "string",
  }
});

insert(db, {
  quote: "I feel as if I'm always on the verge of waking up",
  author: "Fernando Pessoa"
});

const results = search(db, {
  term: "waking up"
});
```

With `v0.4.0`, Lyra methods are now asynchronous. This means that you'll need to use `await` when calling them:

```js
import { create, insert, search } from "@lyrasearch/lyra";

const db = await create({
  schema: {
    quote: "string",
    author: "string",
  }
});

await insert(db, {
  quote: "I feel as if I'm always on the verge of waking up",
  author: "Fernando Pessoa"
});

const results = await search(db, {
  term: "waking up"
});
```

If you're using Lyra in a browser, you can use the `async` attribute on your script tag:

```html
<script type="module" async>
  import { create, insert, search } from "@lyrasearch/lyra";

  const db = await create({
    schema: {
      quote: "string",
      author: "string",
    }
  });

  // ...
</script>
```

The synchronous methods now moved to async are:

- `create`
- `insert`
- `search`
- `remove`
- `load`
- `save`

### CommonJS imports

Lyra now ships **ESM** modules by default. This allows us to move faster when providing new features and bug fixes, as well as using the `"exports"` field in `package.json` to provide a better developer experience.

CommonJS imports are still supported, but you'll need to import Lyra from `@lyrasearch/lyra/cjs` instead of `@lyrasearch/lyra`:

```diff
- const { search, insert, create } = require("@lyrasearch/lyra");
+ const { search, insert, create } = require("@lyrasearch/lyra/cjs");
```

### Default IDs

With version `v0.3.1` and below, Lyra would generate a random ID for each document you inserted. This was a good default, but it didn't allow you to use your own IDs.

With `v0.4.0`, Lyra will use the `id` field of your document as the ID. If you don't provide an `id` field, Lyra will generate a random ID for you.

If you have an existing instance of Lyra with a `id` property in the schema definition, make sure that everything works as expected after migrating to `v0.4.0`.

Read more on how to generate custom IDs in the [docs](/usage/insert-data#custom-document-ids).
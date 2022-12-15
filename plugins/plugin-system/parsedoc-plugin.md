---
description: >-
  The plugin-parsedoc plugin allows Lyra to parse and create indexes from HTML
  and Markdown documents automatically.
---

# Parsedoc plugin

## Installation <a href="#installation" id="installation"></a>

You can install the plugin using any major Node.js/Bun package manager:

{% code title="Using npm" %}
```bash
npm install --save @lyrasearch/plugin-parsedoc
```
{% endcode %}

{% code title="Using pnpm" %}
```bash
pnpm add @lyrasearch/plugin-parsedoc
```
{% endcode %}

{% code title="Using Yarn" %}
```bash
yarn add @lyrasearch/plugin-parsedoc
```
{% endcode %}

## Usage

Plugin usage depends on the runtime that you are using, even though the goal is to expose the exact same APIs for browsers, Deno, and all the other JavaScript engines.

The plugin exports `defaultHtmlSchema` which will be the schema used in the index. Providing a glob pattern to the files containing the documents will index them.

```javascript
import { create, insert } from '@lyrasearch/lyra'
import { populateFromGlob, defaultHtmlSchema } from "@lyrasearch/plugin-parsedoc";


const db = create({
  schema: defaultHtmlSchema
})

await populateFromGlob(db, "docs/**/*.html")
```

## API Reference

#### `populateFromGlob`[​](https://deploy-preview-8--lyra-docs.netlify.app/plugins/plugin-parsedoc#populatefromglob) <a href="#populatefromglob" id="populatefromglob"></a>

An asynchronous function that takes three arguments:

* `db`: the database to populate.
* `globPath`: a string representing a glob path to reading the files from.
* `options`: an object containing the following properties:
  * `transformFn` (optional): a function that passes an object as its only argument. It contains the raw HTML/Markdown chunk, tag name, parsed content and html attributes.
  * `mergeStrategy` (optional): a value that defines how to handle consecutive chunks of the same tag. The default value is `merge`. Accepted values are:
    * `merge`: consecutive chunks with the same tag will be merged into one document for the index.
    * `split`: consecutive chunks with the same tag will be split into separate documents for the index.
    * `both`: consecutive chunks with the same tag will be split into separate documents for the index, and also merged into one document for the index.

#### `populate`[​](https://deploy-preview-8--lyra-docs.netlify.app/plugins/plugin-parsedoc#populate) <a href="#populate" id="populate"></a>

A function that takes three arguments. Should be used internally by `populateFromGlob`:

* `db`: the database to populate. Should use Lyra's native `insert` or `insertBatch` methods internally.
* `data`: raw HTML/Markdown string or Buffer.
* `fileType`: a string representing the file type. Accepted values are `html` and `md`.
* `options`: an object containing the following properties:
  * `transformFn` (optional): a function that passes an object as its only argument. It contains the raw HTML/Markdown chunk, tag name, parsed content and html attributes.
  * `mergeStrategy` (optional): a value that defines how to handle consecutive chunks of the same tag. The default value is `merge`. Accepted values are:
    * `merge`: consecutive chunks with the same tag will be merged into one document for the index.
    * `split`: consecutive chunks with the same tag will be split into separate documents for the index.
    * `both`: consecutive chunks with the same tag will be split into separate documents for the index, and also merged into one document for the index.
  * `basePath` (optional): a string representing the base path of the file. This is used to generate the `id` field in the index

---
description: >-
  The plugin-data-persistence plugin allows Lyra to bump the entire database and
  restore it in three different formats.
---

# Data persistence plugin

The plugin is currently available on the following runtimes:

| Runtime        | Status                 |
| -------------- | ---------------------- |
| Node.js        | ✅  available           |
| Bun            | ✅  available           |
| V8 isolates    | ✅  available           |
| Major browsers | ✅  available           |
| Deno           | 🚧  under construction |

## Installation

You can install the plugin using any major Node.js/Bun package manager:

{% code title="Using npm" %}
```bash
npm install --save @lyrasearch/plugin-data-persistence
```
{% endcode %}

{% code title="Using Yarn" %}
```bash
yarn add @lyrasearch/plugin-data-persistence
```
{% endcode %}

{% code title="Using pnpm" %}
```bash
pnpm add @lyrasearch/plugin-data-persistence
```
{% endcode %}

## Usage

Plugin usage depends on the runtime that you are using, even though the goal is to expose the exact same APIs for browsers, Deno, and all the other JavaScript engines.

Let's consider the following Lyra instance as a common database source for both browsers and JavaScript engines:

```javascript
import { create, insert } from '@lyrasearch/lyra'

const originalInstance = create({
  schema: {
    author: 'string',
    quote: 'string'
  }
})

insert(originalInstance, {
  quote: 'He who is brave is free',
  author: 'Seneca'
})

insert(originalInstance, {
  quote: 'Make each day your masterpiece',
  author: 'John Wooden'
})

insert(originalInstance, {
  quote: 'You must be the change you wish to see in the world',
  author: 'Mahatma Gandhi'
})
```

## Persisting the database to disk[​](https://docs.lyrajs.io/plugins/plugin-data-persistence#persisting-the-database-to-disk) <a href="#persisting-the-database-to-disk" id="persisting-the-database-to-disk"></a>

Now we have a Lyra instance containing three quotes. We can use the `plugin-data-persistence` plugin to save the database to a file:

```javascript
import { persistToFile } from '@lyrasearch/plugin-data-persistence'

const filePath = persistToFile(originalInstance, 'binary', './quotes.msp')
```

# Create a new Lyra instance

## Create

We `create` a new instance (from now on database) with an **indexing
`schema`**.<br/> The schema represents **the structure** of the document to be
inserted.

A database can be as simple as:

```javascript
import { create } from "@lyrasearch/lyra";

const db = create({
  schema: {
    word: "string",
  },
});
```

or more variegated:

```javascript
import { create } from "@lyrasearch/lyra";

const movieDB = create({
  schema: {
    title: "string",
    director: "string",
    plot: "string",
    year: "number",
    isFavorite: "boolean",
  },
});
```

## Nested properties

Lyra supports nested properties natively. Just add them as you would typically
do in any JavaScript object:

```javascript
const movieDB = create({
  schema: {
    title: "string",
    plot: "string",
    cast: {
      director: "string",
      leading: "string",
    },
    year: "number",
    isFavorite: "boolean",
  },
});
```

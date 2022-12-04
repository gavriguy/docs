# Stop-words

> _The words which are generally filtered out before processing a natural language are called **stop words**. These are actually the most common words in any language (like articles, prepositions, pronouns, conjunctions, etc) and does not add much information to the text. Examples of a few stop words in English are “the”, “a”, “an”, “so”, “what”. (_[_source_](https://towardsdatascience.com/text-pre-processing-stop-words-removal-using-different-libraries-f20bac19929a)_)_

Lyra automatically removes common stop-words for you, depending on the `defaultLanguage` parameter used during new instance creation.

As for now, Lyra supports 12 languages when it comes to stop-words removal:

* English (default)
* Italian
* French
* Spanish
* Portugaise
* Dutch
* Swedish
* Russian
* Norwegian
* German
* Danish
* Finnish

## Disabling stop-words removal

You can disable stop-words removal by setting `enableStopWords: false` when creating a new Lyra instance:

```javascript
import { create } from "@lyrasearch/lyra";

const db = create({
  schema: {
    author: "string",
    quote: "string",
  },
  tokenizer: {
    enableStopWords: false,
  },
});
```

## Customizing stop-words

You can interact with the default Lyra stop-words by using the built-in `customStopWords` property when creating a new Lyra instance:

```javascript
import { create } from "@lyrasearch/lyra";

const db = create({
  schema: {
    author: "string",
    quote: "string",
  },
  tokenizer: {
    customStopWords: (defaultStopWords) =>[...defaultStopWords, "foo", "bar"],
  },
});
```

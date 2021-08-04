<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Adonis MeiliSearch](#adonis-meilisearch)
  - [Installation](#installation)
  - [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Adonis MeiliSearch
> adonis, meilisearch

[![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

A MeiliSearch provider for Adonis 5.x

## Installation

You may install this package via:
```
npm i @bitkidd/adonis-meilisearch
# or
yarn add @bitkidd/adonis-meilisearch
```

After installation you have to configure it:
```
node ace configure @bitkidd/adonis-meilisearch
```

This will create `/config/meilisearch.ts` file where you can configure the provider.

This package depends on two main `ENV` variables, `MEILISEARCH_HOST` and `MEILISEARCH_API_KEY`, please add it to your `env.ts` file and into actual `.env` file.

## Usage

To use MeilisSearch provider you should call it via import
```javascript
import MeiliSearch from '@ioc:Adonis/Addons/MeiliSearch'

const index = MeiliSearch.index('movies')
```

To properly configure the provider, follow the docs here: [`meilisearch`](https://github.com/meilisearch/meilisearch-js)

[npm-image]: https://img.shields.io/npm/v/@bitkidd/adonis-meilisearch/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@bitkidd/adonis-meilisearch "npm"

[license-image]: https://img.shields.io/npm/l/@bitkidd/adonis-meilisearch?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"

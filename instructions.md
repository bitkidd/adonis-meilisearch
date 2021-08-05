The package has been configured successfully. The MeiliSearch configuration stored inside `config/meilisearch.ts` file relies on the following environment variables and hence we recommend validating them.

**Open the `env.ts` file and paste the following code inside the `Env.rules` object.**

```ts
MEILISEARCH_HOST: Env.schema.string({ format: 'url' }),
MEILISEARCH_API_KEY: Env.schema.string(),
```
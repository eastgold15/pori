# @eastgold15/tsconfig

```bash
npm i -D @eastgold15/tsconfig
```

[Total TS Reference](https://www.totaltypescript.com/tsconfig-cheat-sheet)

- Sets source dir to `src` and out dir to `dist`
- Assumes you know your runtime, includes `@types/node` as a dependency, and sets `lib` to include DOM types.

## tsc

```json
{ "extends": "@eastgold15/tsconfig/tsc.json" }
```

## bundler

```json
{ "extends": "@eastgold15/tsconfig/bundler.json" }
```
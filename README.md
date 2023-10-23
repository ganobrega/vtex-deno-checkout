# vtex-deno-checkout [WIP]

Don't try this in production yet.

## Benefits
- Zero Config (`build.ts` is all you need) 
- Zero `node_modules`
- Zero eslint & prettier (native [`deno lint`](https://docs.deno.com/runtime/manual/tools/linter))
- Fast ES6 and ES5 (if you need'it for IE) transpiler (esbuild + swc)
- Fast SCSS transpiler (SASS + PostCSS)
- Built-in jQuery and (window.vtexjs & window.vtex & window.vtexid) types
- The best Checkout Ever in 17 files and nothing more
- Enforces readable code, because you read more code than you write.
- Caches dependencies for much better performance.
- Works awesome with Github Copilot
- Preact (comming soon)

## Getting started

1. Clone this repo
2. Change the vendor in `manifest.json`
3. Run `vtex link` and `deno task start` in parallel
4. Code your components and styles in `checkout-ui-custom`
5. Release a new version `vtex release <patch|minor> stable`
6. Publish the app `vtex publish`
7. Deploy it `vtex deploy <vendor>.<name>@<version>`
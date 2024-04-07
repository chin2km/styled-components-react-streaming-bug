# styled-components react ssr streaming bug

Styled-components v6 breaks html when used with react 18 ssr streaming using `renderToNodeStream` or with `renderToPipeableStream`

## commands:

```
yarn install
yarn dev:ssr
```

And see the generated html is broken.

### CSR - works

client side rendering for the same code works as expected

```
yarn dev:csr
```

Issue: https://github.com/styled-components/styled-components/issues/4289

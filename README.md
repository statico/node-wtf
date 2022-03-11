# node-wtf

1. `yarn install`
1. `yarn exec ts-node-dev test.ts`

```
yarn exec v1.22.15
[INFO] 21:32:48 ts-node-dev ver. 1.1.8 (using ts-node ver. 9.1.1, typescript ver. 4.6.2)
Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/ian/Desktop/node-wtf/node_modules/node-fetch/src/index.js from /Users/ian/Desktop/node-wtf/test.ts not supported.
Instead change the require of index.js in /Users/ian/Desktop/node-wtf/test.ts to a dynamic import() which is available in all CommonJS modules.
    at Object.nodeDevHook [as .js] (/Users/ian/Desktop/node-wtf/node_modules/ts-node-dev/lib/hook.js:63:13)
    at Object.<anonymous> (/Users/ian/Desktop/node-wtf/test.ts:39:20)
    at Module._compile (/Users/ian/Desktop/node-wtf/node_modules/source-map-support/source-map-support.js:568:25)
    at Module.m._compile ()
    at require.extensions.<computed> ()
    at Object.nodeDevHook [as .ts] (/Users/ian/Desktop/node-wtf/node_modules/ts-node-dev/lib/hook.js:63:13)
    at Object.<anonymous> (/Users/ian/Desktop/node-wtf/node_modules/ts-node-dev/lib/wrap.js:104:1)
    at Module._compile (/Users/ian/Desktop/node-wtf/node_modules/source-map-support/source-map-support.js:568:25)
[ERROR] 21:32:49 Error: require() of ES Module /Users/ian/Desktop/node-wtf/node_modules/node-fetch/src/index.js from /Users/ian/Desktop/node-wtf/test.ts not supported.
Instead change the require of index.js in /Users/ian/Desktop/node-wtf/test.ts to a dynamic import() which is available in all CommonJS modules.
```

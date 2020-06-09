# sequelize-core-js-issue

This repo reproduces an issue with core-js in Sequelize 6.0.0 beta. The issue is caused by incompatibility of [_.isNative()](https://lodash.com/docs/4.17.15#isNative) and [core-js polyfill](https://github.com/zloirock/core-js).

From `_.isNative()` docs:

> This method can't reliably detect native functions in the presence of the core-js package because core-js circumvents this kind of detection. Despite multiple requests, the core-js maintainer has made it clear: any attempt to fix the detection will be obstructed. As a result, we're left with little choice but to throw an error. Unfortunately, this also affects packages, like babel-polyfill, which rely on core-js.

## How to reproduce

1. Install dependencies:

    ```bash
    $ yarn
    ```
   
2. Build:

    ```bash
    $ yarn build
    ```
   
3. Execute:

    ```bash
    $ node dist/index.js
    ```
# Set up

## initial set up

- open root folder in terminal, run npm install command.

```bash
  npm i
```

- Assets can be downloaded from idea.thecela.com and added to public folder

- run following command to start server

```bash
 npm run dev
```

## Import statements

- Importing from the /public directory should be done with import.meta.env.VITE_ASSETS_PATH.
  - The correct path for development/production is set during vite build scripts automatically

example

```js

const component = () => {
  ...
  return <img src={import.meta.env.VITE_ASSETS_PATH + '/images/myimage.png'}></img>
}

```

## Thirdweb

  Within the `index.html` file two scripts need to be added

  ```html
      <script>window.global = window;</script>
      <script type="module">
        import process from 'process';
        import { Buffer } from "buffer";
        import EventEmitter from "events";
      
        window.Buffer = Buffer;
        window.process = process;
        window.EventEmitter = EventEmitter;
      </script>
  ```

  This is to override errors within react when using web3.0 packages/thirdweb.
  The `vite.config.js` also needs to have alias added within the resolve setup

  ```js
    resolve: {
      alias: {
        process: "process/browser",
        stream: "stream-browserify",
        zlib: "browserify-zlib",
        util: "util",
      },
    },
  ```

  Excluding these additions will cuase react to fail during the build process

# Build

- Run following command, output will be in dist folder

```bash
 npm run build
```

- navigate to the /dist folder, inside there will be a /creator/assets folder.
  - copy all of the contents from here to /public/creator/assets on the google cloud server at /creator/assets

- Inside of the /dist folder in the index.html copy the new <script> src field

Example:

```html
    <script type="module" crossorigin src="/creator/assets/index.93aa2a11.js"></script>
```

- On the server navigate to the reactApp.blade.php file inside of resources/views and replace the old script source with what you copied

Example:

```php
    <script type='module' crossorigin src="{{ asset('/creator/assets/index.d95902c6.js') }}"><script>
```

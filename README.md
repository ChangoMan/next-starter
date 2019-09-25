# Next-starter

This project was generated using Next.js. I am using a templae from Html5Up (https://html5up.net/) which provides scss for all the project.

## Install

* yarn install
* yarn serve

## Issues

I cannot compile scss. Console hangs at 'Compiling...' and never loads the page.
Following advice and docs I have added a custom next.config.js file and also tried different configurations, including having a postcss.config.js file and custom .babelrc (disabled as it should be provided by Next.jsout of the box).

The following dependencies were added in an attempt to customize compilation and webpack configuration but they are NOT required.

    "postcss-easy-import": "^3.0.0",
    "postcss-loader": "^3.0.0",
    "raw-loader": "^0.5.1",
    "autoprefixer": "^9.1.5",
    "babel-plugin-module-resolver": "^3.1.1",
    "babel-plugin-wrap-in-js": "^1.1.1",
    "glob": "^7.1.3",
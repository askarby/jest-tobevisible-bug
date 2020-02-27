# Jest "toBeVisible" Bug

This repository has been configured to use [Jest](https://jestjs.io/) for testing, using the [Jest builder for Angular build facade](https://github.com/just-jeb/angular-builders/tree/master/packages/jest).

# Purpose

This repository proves that [@ngneat/spectator](https://github.com/ngneat/spectator)'s [custom matcher](https://github.com/ngneat/spectator#custom-matchers) 
[`toBeVisible`](https://github.com/ngneat/spectator/blob/master/projects/spectator/src/lib/matchers.ts#L406) does not work when used
in conjunction with [Jest](https://jestjs.io/) (due to a lackluster implementation of `offsetWidth` / `offsetHeight` by [jsdom](https://github.com/jsdom/jsdom)).

# Execute

The tests can be executed by running the command `npm test`.

# Pre-requisites

1. Clone this repository (`git clone ...`)
2. From within the location of the "cloned repository", execute `npm install`

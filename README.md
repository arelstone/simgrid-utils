# @arelstone/simgrid-utils
A set of utilities for [the simgrid](https://www.thesimgrid.com/).

![npm](https://shields.cdn.bka.li/npm/dt/@arelstone/simgrid-utils?style=for-the-badge)
![npm (scoped)](https://shields.cdn.bka.li/npm/v/@arelstone/simgrid-utils?label=version&style=for-the-badge)
![GitHub issues](https://shields.cdn.bka.li/github/issues/arelstone/simgrid-entrylist?style=for-the-badge)
![GitHub pull requests](https://shields.cdn.bka.li/github/issues-pr/arelstone/simgrid-entrylist?style=for-the-badge)


## Examples

### JSON format
```ts
import { Simgrid } from '@arelstone/simgrid-utils'

Simgrid.entryList.ACC.csv(1)
  .then(data => console.log(data))
```

### CSV format
```ts
import { Simgrid } from '@arelstone/simgrid-utils'

Simgrid.entryList.ACC.csv(1)
  .then(data => console.log(data))
```

## Installation
Yarn:
```sh
yarn add @arelstone/simgrid-utils
```
npm:
```sh
npm install @arelstone/simgrid-utils
```

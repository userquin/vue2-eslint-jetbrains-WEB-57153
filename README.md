# vue2-eslint-jetbrains-WEB-57153

Repo for https://youtrack.jetbrains.com/issue/WEB-57153

I use NVM for Windows 10 PRO, `pnpm 7` as package manager and Node 16.13.0 LTS with `corepack` enabled.

**WARNING**: if you have an older NVM for Windows version you cannot install `node 16.14+`, there is a problem with the new node versions (you will need to update NVM for Windows to latest version).

From the command line (from any folder):
```shell
nvm list available

nvm install 16.13.0

nvm use 16.13.0

npm i -g pnpm corepack

corepack enable
```

## Install and Run

From root folder run following script from command line:
```shell
pnpm install
```

**WARNING**: just ignore the `ERR_PNPM_PEER_DEP_ISSUES Unmet peer dependencies` error from `pnpm`.

You must use `pnpm`, the lock file is using `vue2 < 2.7`: if you use another package manager, `vue2` will resolve to `2.7` version. 

To run the app, from the command line run:
```shell
pnpm run dev
```

## Configuring IntelliJ

Once the dependencies installed, enable `ESLint` using `Automatic ESLint Configuration` with defaults `Run for files` option and check the `Run eslint --fix on save` option (Settings > Languages & Frameworks > Code Quality Tools > ESLint).

Open the `src/views/index.vue` and start editing the file adding computed/ref vars or using macros like `defineProps/defineExpose`, with the `Activity Monitor` opened (Help > Diagnostic Tools > Activiy Monitor).

The CPU will grow to `200%` just with one file, my project currently have 2000+ modules, 260+ views/routes and 160+ custom components using vuetify ones (medium size project).


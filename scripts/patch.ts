import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

const patchPkg = (name: string, data: any) => {
  const pkgPath = path.resolve('node_modules', name, 'package.json')

  const pkg = JSON.parse(readFileSync(pkgPath, { encoding: 'utf-8' }))

  if (pkg.type === 'module')
    return

  const patchedPkg = {
    ...pkg,
    ...data,
  }

  writeFileSync(pkgPath, JSON.stringify(patchedPkg, null, 2), { encoding: 'utf-8' })
}

const patch = () => {
  const content: string = readFileSync('./node_modules/vue2-helpers/vue-router.js', { encoding: 'utf-8' })
  if (content.includes('@vue/composition-api'))
    writeFileSync('./node_modules/vue2-helpers/vue-router.js', content.replace('@vue/composition-api', 'vue-demi'), { encoding: 'utf-8' })

  patchPkg('yup', {
    type: 'module',
    sideEffects: false,
    exports: {
      '.': {
        require: './index.js',
        import: './index.esm.js',
        types: './index.d.ts',
      },
    },
  })
}

patch()

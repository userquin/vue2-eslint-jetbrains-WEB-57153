import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import { presetIcons/* , presetUno */ } from 'unocss'
import viteCompression from 'vite-plugin-compression'

let presetName: string | undefined

const config = defineConfig({
  assetsInclude: './src/assets/*',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
    dedupe: ['vue-demi'],
  },

  build: {
    sourcemap: true,
    // minify: true,
    manifest: true,
  },

  css: {
    preprocessorOptions: {
      sass: {
        additionalData: [
          // vuetify variable overrides
          '@import "@/styles/variables.scss"',
          '',
        ].join('\n'),
      },
    },
  },

  plugins: [
    Vue2({ target: 'esnext' }),
    ScriptSetup(),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      dirs: './src/views',
      // routeStyle: 'nuxt',
      extensions: ['vue'],
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'pinia',
        'vue-demi',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      resolvers: [VuetifyResolver()],
      dts: 'src/components.d.ts',
      types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView'],
      }],
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS({
      presets: [presetIcons({
        collections: {
          custom: {
            'animating-cogs': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
\t\t\t<g fill="currentColor">
\t\t\t\t<path
\t\t\t\t\td="M15.9,18.45 C17.25,18.45 18.35,17.35 18.35,16 C18.35,14.65 17.25,13.55 15.9,13.55 C14.54,13.55 13.45,14.65 13.45,16 C13.45,17.35 14.54,18.45 15.9,18.45 M21.1,16.68 L22.58,17.84 C22.71,17.95 22.75,18.13 22.66,18.29 L21.26,20.71 C21.1732421,20.8591648 20.9907124,20.9228379 20.83,20.86 L19.09,20.16 C18.73,20.44 18.33,20.67 17.91,20.85 L17.64,22.7 C17.62,22.87 17.47,23 17.3,23 L14.5,23 C14.32,23 14.18,22.87 14.15,22.7 L13.89,20.85 C13.46,20.67 13.07,20.44 12.71,20.16 L10.96,20.86 C10.81,20.92 10.62,20.86 10.54,20.71 L9.14,18.29 C9.05197198,18.1408096 9.08594541,17.949709 9.22,17.84 L10.7,16.68 L10.65,16 L10.7,15.31 L9.22,14.16 C9.08671766,14.0498393 9.05285258,13.8593482 9.14,13.71 L10.54,11.29 C10.62,11.13 10.81,11.07 10.96,11.13 L12.71,11.84 C13.07,11.56 13.46,11.32 13.89,11.15 L14.15,9.29 C14.18,9.13 14.32,9 14.5,9 L17.3,9 C17.47,9 17.62,9.13 17.64,9.29 L17.91,11.15 C18.33,11.32 18.73,11.56 19.09,11.84 L20.83,11.13 C21,11.07 21.17,11.13 21.26,11.29 L22.66,13.71 C22.75,13.86 22.71,14.05 22.58,14.16 L21.1,15.31 L21.15,16 L21.1,16.68"
\t\t\t\t>
\t\t\t\t\t<animateTransform attributeName="transform" type="rotate" values="360 16 16;0 16 16" dur="3s" repeatCount="indefinite" />
\t\t\t\t</path>
\t\t\t\t<path
\t\t\t\t\td="M6.69,8.07 C7.56,8.07 8.26,7.37 8.26,6.5 C8.26,5.63 7.56,4.92 6.69,4.92 C5.8173901,4.92 5.11,5.6273901 5.11,6.5 C5.11,7.37 5.82,8.07 6.69,8.07 M10.03,6.94 L11,7.68 C11.07,7.75 11.09,7.87 11.03,7.97 L10.13,9.53 C10.08,9.63 9.96,9.67 9.86,9.63 L8.74,9.18 L8,9.62 L7.81,10.81 C7.79,10.92 7.7,11 7.59,11 L5.79,11 C5.67,11 5.58,10.92 5.56,10.81 L5.4,9.62 L4.64,9.18 L3.5,9.63 C3.41,9.67 3.3,9.63 3.24,9.53 L2.34,7.97 C2.28,7.87 2.31,7.75 2.39,7.68 L3.34,6.94 L3.31,6.5 L3.34,6.06 L2.39,5.32 C2.30520815,5.24825179 2.28413029,5.1260002 2.34,5.03 L3.24,3.47 C3.3,3.37 3.41,3.33 3.5,3.37 L4.63,3.82 L5.4,3.38 L5.56,2.19 C5.58,2.08 5.67,2 5.79,2 L7.59,2 C7.7,2 7.79,2.08 7.81,2.19 L8,3.38 L8.74,3.82 L9.86,3.37 C9.96,3.33 10.08,3.37 10.13,3.47 L11.03,5.03 C11.09,5.13 11.07,5.25 11,5.32 L10.03,6.06 L10.06,6.5 L10.03,6.94 Z"
\t\t\t\t>
\t\t\t\t\t<animateTransform attributeName="transform" type="rotate" values="0 6.5 6.5;360 6.5 6.5" dur="2s" repeatCount="indefinite" />
\t\t\t\t</path>
\t\t\t</g>
\t\t</svg>`,
          },
        },
        customizations: {
          iconCustomizer(collection, icon, props) {
            // customize all icons in this collection
            if (collection === 'mdi' && icon === 'checkbox-intermediate') {
              props.width = '24px'
              props.height = '24px'
            }
          },
        },
        scale: 1,
      })],
    }),
    splitVendorChunkPlugin(),
    // gzip
    viteCompression({ filter: /\.(css|js|svg|html|ico|map)$/, threshold: 0 }),
    // brotli
    viteCompression({ filter: /\.(css|js|svg|html|map)$/, algorithm: 'brotliCompress', threshold: 0 }),
  ],

  optimizeDeps: {
    exclude: [
      'vue-demi',
      'vuetify/lib',
      'vuetify/lib/components/VDataTable/MobileRow',
      'vuetify/lib/components/VDataTable/Row',
      'vuetify/lib/components/VDataTable/VDataTableHeaderDesktop',
      'vuetify/lib/components/VDataTable/VDataTableHeaderMobile',
      'vuetify/lib/components/VDataTable/mixins/header',
      'vuetify/lib/util/dedupeModelListeners',
      'vuetify/lib/util/rebuildFunctionalSlots',
      'vuetify/lib/util/helpers',
      'vuetify/lib/util/mergeData',
    ],
    include: [
      '@vueuse/core',
      '@vueuse/integrations/useFocusTrap',
      '@vue/composition-api',
      'yup',
      'lodash-es/deburr',
      'lodash-es/isEqual',
      '@js-joda/core',
    ],
  },
})

export default config

/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/default */
import yaml from 'esbuild-plugin-yaml'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  format: ['cjs'],
  clean: true,
  outDir: 'lib',
  esbuildPlugins: [yaml.yamlPlugin({})],
  esbuildOptions(options, context) {},
})

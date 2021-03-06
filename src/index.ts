import { Context } from 'koishi'

import i18n from './i18n'
import { HitokotoApi } from './api'
import { Config } from './config'

export const name = 'hitokoto'
export { Config, HitokotoApi }

export async function apply(ctx: Context, _config: Config = {}): Promise<void> {
  const config = {
    apiUrl: 'https://v1.hitokoto.cn/',
    ..._config,
  }

  Object.entries(i18n).forEach(([key, value]) => ctx.i18n.define(key, value))

  ctx.plugin(HitokotoApi)

  ctx
    .command('hitokoto')
    .alias('一言')
    .option('type', `-t <type:string>`)
    .option('min-length', `-l <length:int>`)
    .option('max-length', `-L <length:int>`)
    .before(async ({ options, session }) => {
      if (options?.['min-length'] && options?.['max-length']) {
        if (options['min-length'] > options['max-length']) {
          return session?.text('.min_length_gt_max_length')
        }
      }
      if (typeof options?.type === 'undefined') {
        return
      }
      const types = options?.type?.split(',')
      if (types.length <= 0 || !types.every((t) => t)) {
        return session?.text('.invalid_type', [options.type])
      }
    })
    .action(async ({ options, session }) => {
      const params = {
        c: options?.type?.split(',') ?? config.defaultTypes,
        min_length: options?.['min-length'] ?? config.minLength,
        max_length: options?.['max-length'] ?? config.maxLength,
      }

      try {
        const resp = await ctx.hitokoto.getHitokoto(params)
        return session?.text('.format', resp)
      } catch (error) {
        const err = error as Error
        if (/ETIMEOUT/.test(err.message)) {
          return session?.text('.timeout')
        }
        return session?.text('.unknown_error', err)
      }
    })

  ctx.command('hitokoto.types').action(async ({ session }) => {
    return session?.text('.list', [
      Object.entries(ctx.hitokoto.types)
        .map(([type, desc]) => `${type} - ${desc}`)
        .join('\n'),
    ])
  })
}

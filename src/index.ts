import { Context, Quester } from 'koishi'
import type { SentencesParams } from 'koishi-plugin-hitokoto-sentences'

import { HitokotoApi } from './api'
import { Config } from './config'
import i18n from './i18n'

export const inject = {
  optional: ['sentences'],
}

export const name = 'hitokoto'

export { Config, HitokotoApi }

export async function apply(ctx: Context, config: Config = {}): Promise<void> {
  Object.entries(i18n).forEach(([key, value]) => ctx.i18n.define(key, value))

  ctx.plugin(HitokotoApi, config)

  ctx
    .command('hitokoto')
    .alias('一言')
    .option('type', `-t <type:string>`)
    .option('minLength', `-l <length:int>`)
    .option('maxLength', `-L <length:int>`)
    .before(async ({ options, session }) => {
      if (options?.minLength && options?.maxLength) {
        if (options.minLength > options.maxLength) {
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
        min_length: options?.minLength ?? config.minLength,
        max_length: options?.maxLength ?? config.maxLength,
      }

      try {
        const resp =
          config.sentences && ctx.sentences
            ? ctx.sentences.getSentence(params as SentencesParams)
            : await ctx.hitokoto.getHitokoto(params)
        return session?.text('.format', resp)
      } catch (error) {
        const err = error as Error
        if (/ETIMEOUT/.test(err.message)) {
          return session?.text('.timeout')
        }
        if (Quester.isAxiosError(err)) {
          return session?.text('.request_error', [err.status])
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

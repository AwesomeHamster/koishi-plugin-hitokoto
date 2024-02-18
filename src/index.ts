import { Context } from 'koishi'

import { HitokotoApi } from './api'
import * as Command from './command'
import { Config } from './config'
import i18n from './i18n'

export const name = 'hitokoto'

export { Config, HitokotoApi }

export async function apply(ctx: Context, config: Config = {}): Promise<void> {
  Object.entries(i18n).forEach(([key, value]) => ctx.i18n.define(key, value))

  ctx.plugin(HitokotoApi, config)
  ctx.plugin(Command, config)
}

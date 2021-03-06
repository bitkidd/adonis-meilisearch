/*
 * @bitkidd/adonis-meilisearch
 *
 * (c) Chirill Ceban <cc@bitkidd.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { MeiliSearch } from 'meilisearch'

export default class MeiliSearchProvider {
  constructor(protected app: ApplicationContract) {}

  public async register() {
    this.app.container.singleton('Adonis/Addons/MeiliSearch', () => {
      const config = this.app.container.resolveBinding('Adonis/Core/Config').get('meilisearch', {})

      return new MeiliSearch(config.meilisearch)
    })
  }
}

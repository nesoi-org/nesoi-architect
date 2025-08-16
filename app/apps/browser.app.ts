import Nesoi from '$';
import { BrowserApp } from 'nesoi/lib/engine/apps/browser/browser.app';
import { BrowserDBBucketAdapter } from 'nesoi/lib/elements/entities/bucket/adapters/browserdb.bucket_adapter';
import { BrowserDBService } from 'nesoi/lib/elements/entities/bucket/adapters/browserdb.service';

export default new BrowserApp('@nesoi/architect-for-browser', Nesoi)

  /**
   *  Package
   */

  .package({
    'author': 'Hugo Aboud',
    'license': 'MIT'
  })

  /**
   *  Modules
   */

  .modules([
    'core',
    'database'
  ])

  
  /**
   *  Services
   */

  .service(new BrowserDBService({
    dbName: 'nesoi-architect',
    dbVersion: 1,
    meta: {
      created_at: 'created_at',
      created_by: 'created_by',
      updated_at: 'updated_at',
      updated_by: 'updated_by',
    }
  }))

  /**
   *  Authentication
   */

  .config.authn({
    // Here you declare authentication providers for the authentication users
    // declared on the space (nesoi.ts)
  })

  /**
   *  Buckets
   */

  .config.module('core', {
    buckets: {
      container: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      credential: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      device_type: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      device: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      environment: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      link: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      node: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
    },
    trx: {
      wrap: BrowserDBService.wrap('idb')
    },
    trash: {
      // Here you can configure the soft-delete behavior of this module
    }
  })
  .config.module('database', {
    buckets: {
      backup: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      }
    },
    trx: {
      wrap: BrowserDBService.wrap('idb')
    },
    trash: {
      // Here you can configure the soft-delete behavior of this module
    }
  })

  /**
   *  i18N
   */

  // A map of translations for error messages
  //.config.i18n(
  //)

  /**
   *  CLI & Compiler
   */

  .config.compiler({
    nesoiVersion: 'file:/home/aboud/git/nesoi/build_browser',
    libPaths: [
      'modules/device/lib'
    ],
    staticPaths: [
      // Paths to be included on the final build (static files)
    ],
    scripts: {}
  } as any);


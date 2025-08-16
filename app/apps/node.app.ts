import { MonolythApp } from 'nesoi/lib/engine/apps/monolyth/monolyth.app';
import Nesoi from '$';
import { JSONBucketAdapter } from 'nesoi/lib/elements/entities/bucket/adapters/json.bucket_adapter';
import { DeviceCLI } from '../modules/shell/lib/device.cli';

export default new MonolythApp('@nesoi/architect', Nesoi)

  /**
   *  Package
   */

  .package({
    'name': '@nesoi/architect',
    'author': 'Hugo Aboud',
    'license': 'MIT'
  })

  /**
   *  Modules
   */

  .modules([
    'core',
    'shell',
    'database'
  ])

  
  /**
   *  Services
   */

  // Here you can declare a background services
  //.service(
    //...
  //)

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
        adapter: $ => new JSONBucketAdapter($, 'data.json')
      },
      credentials: {
        adapter: $ => new JSONBucketAdapter($, 'data.json')
      },
      device_type: {
        adapter: $ => new JSONBucketAdapter($, 'data.json')
      },
      device: {
        adapter: $ => new JSONBucketAdapter($, 'data.json')
      },
      environment: {
        adapter: $ => new JSONBucketAdapter($, 'data.json')
      },
      link: {
        adapter: $ => new JSONBucketAdapter($, 'data.json')
      },
      node: {
        adapter: $ => new JSONBucketAdapter($, 'data.json')
      },
    },
    trash: {
      // Here you can configure the soft-delete behavior of this module
    }
  })
  .config.module('database', {
    buckets: {
      backup: {
        adapter: $ => new JSONBucketAdapter($, 'data.json')
      }
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

  .config.cli({
    adapters: {
      device: $ => new DeviceCLI($)
    }
  })

  .config.compiler({
    libPaths: [
      'modules/device/lib'
    ],
    staticPaths: [
      // Paths to be included on the final build (static files)
    ],
    scripts: {
      'server': 'bin/server.ts'
    }
  } as any);


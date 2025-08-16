import 'nesoi/tools/dotenv';

import { Log } from 'nesoi/lib/engine/util/log';
import App from '../apps/node.app';

Log.level = process.argv.includes('--debug') ? 'debug' : 'info';

async function main() {
  await App.daemon({
    watch: process.argv.includes('--watch')
  });
}

void main();

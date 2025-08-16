import { CLIAdapter, CLICommand } from 'nesoi/lib/engine/cli/cli_adapter';
import { AnyDaemon, Daemon } from 'nesoi/lib/engine/daemon';
import { CLI } from 'nesoi/lib/engine/cli/cli';
import NesoiMonitor from '.nesoi/space';

export class cmd_backup extends CLICommand {
  constructor() {
    super(
      'any',
      'backup',
      'backup',
      'Backup a Database Device'
    );
  }

  async run(daemon: Daemon<NesoiMonitor, keyof NesoiMonitor['modules']>) {
    // await daemon.trx('device').run(async trx => {
    //   await trx.job('backup').run({
    //     $: 'backup.interactive'
    //   })
    // });
  }
}

export class cmd_restore extends CLICommand {
  constructor() {
    super(
      'any',
      'restore',
      'restore',
      'Restore a Database Device from a Backup'
    );
  }

  async run(daemon: Daemon<NesoiMonitor, keyof NesoiMonitor['modules']>) {
    // await daemon.trx('device').run(async trx => {
    //   await trx.job('restore').run({
    //     $: 'restore.interactive'
    //   })
    // });
  }
}

export class DatabaseCLI extends CLIAdapter {

  constructor(
        public cli: CLI
  ) {
    super(cli);

    this.commands = {
      'backup': new cmd_backup(),
      'restore': new cmd_restore(),
    };
  }
}

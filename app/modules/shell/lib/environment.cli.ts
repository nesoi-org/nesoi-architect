import { CLIAdapter, CLICommand } from 'nesoi/lib/engine/cli/cli_adapter';
import { AnyDaemon, Daemon } from 'nesoi/lib/engine/daemon';
import { CLI } from 'nesoi/lib/engine/cli/cli';
import NesoiMonitor from '.nesoi/space';

export class cmd_ssh extends CLICommand {
  constructor() {
    super(
      'any',
      'ssh',
      'ssh',
      'SSH to a Device'
    );
  }

  async run(daemon: Daemon<NesoiMonitor, keyof NesoiMonitor['modules']>) {
    // await daemon.trx('device').run(async trx => {
    //   await trx.job('ssh').run({
    //     $: 'ssh.interactive'
    //   })
    // });
  }
}

export class cmd_scp extends CLICommand {
  constructor() {
    super(
      'any',
      'scp',
      'scp',
      'Copy file from/to a Device using SCP'
    );
  }

  async run(daemon: Daemon<NesoiMonitor, keyof NesoiMonitor['modules']>) {
    // await daemon.trx('device').run(async trx => {
    //   await trx.job('scp_to').run({
    //     $: 'scp_to.interactive'
    //   })
    // });
  }
}

export class EnvironmentCLI extends CLIAdapter {

  constructor(
        public cli: CLI
  ) {
    super(cli);

    this.commands = {
      'ssh': new cmd_ssh(),
    };
  }
}

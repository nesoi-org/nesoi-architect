import nesoi from "$";
import { Device } from ".nesoi/core.module";
import UI from "nesoi/lib/engine/cli/ui";
import Shell from "nesoi/lib/engine/util/shell";

export default nesoi.job('shell::scp')
    
    .message('', $ => ({
        device: $.id('core::device')
    }))
    .message('interactive', $ => ({
    }))
    .input('@', '@.interactive')
    
    .method(async $ => {
        
        let device;
        
        if ($.msg.$ === 'scp.interactive') {
            const devices = await $.trx.bucket('core::device').readAll();
            if (!devices.length) {
                UI.error('No devices registered.')
                return;
            }
            else {
                const selected = await UI.select<Device>('Pick a device', devices, d => d.alias);
                device = selected.value;
            }
        }
        else {
            device = $.msg.device;
        }
        
        if (!device.ssh_address) {
            throw new Error('Device has no SSH address');
        }

        const cmd = `ssh ${device.ssh_address}`;
        await Shell.cmd(process.cwd(), cmd);
    })
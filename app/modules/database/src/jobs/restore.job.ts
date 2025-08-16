import nesoi from "$";

export default nesoi.job('database::restore')

    .message('', $ => ({
        device_id: $.id('core::device'),
        backup_id: $.id('backup')
    }))
    .message('interactive', $ => ({}))
    .input('@', '@.interactive')
    
    .method(async $ => {

    })
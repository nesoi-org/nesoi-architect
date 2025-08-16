import nesoi from "$";

export default nesoi.job('database::backup')

    .message('', $ => ({
        device_id: $.id('core::device')
    }))
    .message('interactive', $ => ({}))
    .input('@', '@.interactive')
    
    .method(async $ => {

    })
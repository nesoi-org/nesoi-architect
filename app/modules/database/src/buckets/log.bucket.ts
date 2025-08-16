import nesoi from "$";

export default nesoi.bucket('database::log')
    .model($ => ({
        id: $.int,
        node_id: $.int,

        type: $.enum('log_type'),

        message: $.string,
        data: $.dict($.any),
        
        timestamp: $.datetime
    }))
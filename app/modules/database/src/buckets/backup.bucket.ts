import nesoi from "$";

export default nesoi.bucket('database::backup')
    .model($ => ({
        id: $.int,
        node_id: $.int,

        outcome: $.enum(['ok','error']),

        hash: $.string,
        count: $.int,
        bytes: $.int,

        stats: $.obj({
            runtime_ms: $.int
        }),
        
        start_datetime: $.datetime,
        end_datetime: $.datetime
    }))
import nesoi from "$";

export default nesoi.resource('core::device_type')
    .bucket('device_type')
    .view()
    .query()
    .create($ => $)
    .update($ => $)
    .delete($ => $)
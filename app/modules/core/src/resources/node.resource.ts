import nesoi from "$";

export default nesoi.resource('core::node')
    .bucket('node')
    .view()
    .query()
    .create($ => $)
    .update($ => $)
    .delete($ => $)
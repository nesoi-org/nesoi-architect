import nesoi from "$";

export default nesoi.resource('core::device')
    .bucket('device')
    .view()
    .query()
    .create($ => $)
    .update($ => $)
    .delete($ => $)
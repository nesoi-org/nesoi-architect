import nesoi from "$";

export default nesoi.resource('core::credential')
    .bucket('credential')
    .view()
    .query()
    .create($ => $)
    .update($ => $)
    .delete($ => $)
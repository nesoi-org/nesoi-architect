import nesoi from "$";

export default nesoi.resource('core::container')
    .bucket('container')
    .view()
    .query()
    .create($ => $)
    .update($ => $)
    .delete($ => $)
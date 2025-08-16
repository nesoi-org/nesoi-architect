import nesoi from "$";

export default nesoi.resource('core::link')
    .bucket('link')
    .view()
    .query()
    .create($ => $)
    .update($ => $)
    .delete($ => $)
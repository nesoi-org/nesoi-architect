import nesoi from "$";

export default nesoi.resource('core::environment')
    .bucket('environment')
    .view()
    .query()
    .create($ => $)
    .update($ => $)
    .delete($ => $)
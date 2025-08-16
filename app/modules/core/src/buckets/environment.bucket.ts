import nesoi from "$";

export default nesoi.bucket('core::environment')
  .model($ => ({
    id: $.string,
    alias: $.string,
    color: $.string.optional,

    env: $.dict($.string)
  }))
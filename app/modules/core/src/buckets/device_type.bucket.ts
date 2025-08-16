import nesoi from "$";

export default nesoi.bucket('core::device_type')
  .model($ => ({
    id: $.string,
    alias: $.string,
    color: $.string.optional,
  }))
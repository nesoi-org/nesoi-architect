import nesoi from "$";

export default nesoi.bucket('core::container')
  .model($ => ({
    id: $.string,
    alias: $.string,
    color: $.string.optional,
    
    type: $.enum('container_type'),

    environment_id: $.string,
    device_id: $.string,

    env: $.dict($.string)
  }))
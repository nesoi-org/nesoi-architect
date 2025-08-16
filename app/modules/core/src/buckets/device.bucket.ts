import nesoi from "$";

export default nesoi.bucket('core::device')
  .model($ => ({
    id: $.string,
    alias: $.string,
    color: $.string.optional,

    type_id: $.string,

    environment_id: $.string,

    ssh_address: $.string.optional,
    ssh_port: $.int.optional,
    ssh_user: $.string.optional,
    ssh_credentials_id: $.string.optional,

    env: $.dict($.string)
  }))
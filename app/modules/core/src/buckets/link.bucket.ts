import nesoi from "$";

export default nesoi.bucket('core::link')
  .model($ => ({
    id: $.string,
    alias: $.string.optional,
    color: $.string.optional,
    
    type: $.enum('link_type'),

    from_node_id: $.string,
    to_node_id: $.string,

    env: $.dict($.string)
  }))
  .graph($ => ({
    from: $.one('node', {
      id: {'.':'from_id'}
    }),
    to: $.one('node', {
      id: {'.':'to_id'}
    }),
  }))
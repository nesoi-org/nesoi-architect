import nesoi from "$";

export default nesoi.bucket('core::node')
  .model($ => ({
    id: $.string,
    alias: $.string,
    color: $.string.optional,

    type: $.enum('node_type'),
    visibility: $.enum('node_visibility'),

    environment_id: $.string,
    device_id: $.string,
    container_id: $.string.optional,
    
    protocol: $.enum('network_protocol'),
    address: $.string,
    port: $.int.optional,

    env: $.dict($.string),
    healthcheck_uri: $.string.optional
  }))
  .graph($ => ({
    environment: $.one('environment', {
      'id': {'.':'environment_id'}
    }),
    to: $.many('node', {
      'id in': {
        '@link.to_id': { 'from_id': {'.':'id'} }
      }
    }),
    from: $.many('node', {
      'id in': {
        '@link.from_id': { 'to_id': {'.':'id'} }
      }
    }),
  }))
  .view('map', $ => ({
    ...$.raw(),
    from: $.graph('from', 'map'),
    to: $.graph('to', 'map')
  }))
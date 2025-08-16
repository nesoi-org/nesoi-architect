import nesoi from "$";

export default nesoi.bucket('core::credential')
  .model($ => ({
    id: $.string,
    alias: $.string,
    color: $.string.optional,
    
    type: $.enum('credentials_type'),

    environment_id: $.string.optional,
    
    value: $.string.encrypt('CREDENTIALS_CRYPTO_KEY')
  }))
'use strict';

/**
 * `test` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In test middleware.');
    console.log("hello");
    await next();
  };
};

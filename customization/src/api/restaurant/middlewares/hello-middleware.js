'use strict';

/**
 * `hello-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In hello-middleware middleware.');

    await next();
  };
};

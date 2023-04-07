'use strict';

/**
 * `my-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.warn('In my-middleware middleware start.');
    ctx.message = "hhhh";
    ctx.response.lastModified = new Date();
    strapi.log.info(ctx.request.originalUrl)
    strapi.log.info(ctx.request.href)
    strapi.log.info(ctx.response.lastModified)
    strapi.log.info(ctx.query)
    strapi.log.info(JSON.stringify(ctx.request.body.data));
    const { name, content } = ctx.request.body.data;
    if (!name) {
      ctx.badRequest('Name is required');
      return;
    }
    if (!content) {
      ctx.badRequest('Content is required');
      return;
    }
    strapi.log.info(name)
    strapi.log.warn('In my-middleware middleware end.');

    await next();
  };
};

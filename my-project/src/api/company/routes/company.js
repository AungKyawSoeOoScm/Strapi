'use strict';

/**
 * company router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::company.company', {
    config: {
        find: {
            middlewares: ['api::company.test'],
        }
    },
},);

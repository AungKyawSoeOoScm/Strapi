'use strict';

/**
 * restaurant router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::restaurant.restaurant', {
    // prefix: '/res',
    // only: ['find', 'findOne', 'create'],
    except: ['delete'],
    config: {
        find: {
            auth: false,
            // middlewares: ['api::restaurant.my-middleware']
        },
        findOne: {
            auth: false
        },
        update: {
            policies: ['is-admin'],
        },
        create: {
            policies: ['is-admin'],
            middlewares: ['api::restaurant.my-middleware', 'api::restaurant.hello-middleware']

        }
    }
});

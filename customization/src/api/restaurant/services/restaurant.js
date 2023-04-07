'use strict';

/**
 * restaurant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant.restaurant', ({ strapi }) => ({
    async customService(...args) {
        console.log("My customService has been called");
    },

    async entityFindOne(id, ...args) {
        console.log(args);
        const entry = await strapi.entityService.findOne('api::restaurant.restaurant', id, {
            fields: ['name', 'content'],
        });
        return entry
    },

    async entityFindMany(...args) {
        const findMany = await strapi.entityService.findMany('api::restaurant.restaurant', {
            fields: ['name', 'content'],
            filters: { name: 'Chinese Restaurant' },
            populate: {
                cuisines: {
                    fields: ['cname', 'ccontent']
                }
            }
        })
        return findMany
    },

    async entityCreate(name, content, ...args) {
        const create = await strapi.entityService.create('api::restaurant.restaurant', {
            data: {
                name,
                content,
                publishedAt: new Date()
            }
        })
        return create;
    },

    async entityUpdate(id, name, content, ...args) {
        const update = await strapi.entityService.update('api::restaurant.restaurant', id, {
            data: {
                name,
                content,
                cuisines: {
                    connect: [1]
                }
            }
        })
        return update
    },

    async entityDelete(id, ...args) {
        const edelete = await strapi.entityService.delete('api::restaurant.restaurant', id);
        return edelete;
    }

}));

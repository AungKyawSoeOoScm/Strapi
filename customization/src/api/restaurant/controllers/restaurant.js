'use strict';

/**
 * restaurant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::restaurant.restaurant', ({ strapi }) => ({
    async customAction(ctx) {
        try {
            await strapi.service('api::restaurant.restaurant').customService();
            ctx.body = "custom service ok";
        } catch (err) {
            ctx.body = err;
        }
    },

    async entityFnOne(ctx) {
        const { id } = ctx.params;
        try {
            const restaurant = await strapi.service('api::restaurant.restaurant').entityFindOne(id);
            if (!restaurant) {
                throw new Error(`Restaurant with id ${id} not found`);
            }
            ctx.body = restaurant;
        } catch (err) {
            ctx.body = { err: err.message };
        }
    },

    async entityFnMany(ctx) {
        try {
            ctx.body = await strapi.service('api::restaurant.restaurant').entityFindMany();
        } catch (err) {
            ctx.body = err;
        }
    },

    async entityFnCreate(ctx) {
        const { name, content } = ctx.request.body.data;
        try {
            ctx.body = await strapi.service('api::restaurant.restaurant').entityCreate(name, content);
        } catch (err) {
            ctx.body = err;
        }
    },

    async entityFnUpdate(ctx) {
        const { id } = ctx.params;
        const { name, content } = ctx.request.body.data;
        try {
            ctx.body = await strapi.service('api::restaurant.restaurant').entityUpdate(id, name, content);
        } catch (err) {
            ctx.body = err
        }
    },

    async entityFnDelete(ctx) {
        const { id } = ctx.params;
        try {
            ctx.body = await strapi.service('api::restaurant.restaurant').entityDelete(id);
        } catch (err) {
            ctx.body = err;
        }
    },

    async review(ctx) {
        try {
            ctx.body = 'ok';
        } catch (err) {
            ctx.body = err;
        }
    },
    async location(ctx) {
        try {
            ctx.body = 'location get';
        } catch (err) {
            ctx.body = err;
        }
    },
    async createR(ctx, next) {
        const { name, content } = ctx.request.body.data;
        strapi.log.info(`I am coming from controller ${name} - ${content}`)
    }
}));
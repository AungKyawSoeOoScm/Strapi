/**
 * restaurant controller
 */

import { factories } from '@strapi/strapi'
const { createReadStream } = require('fs');
export default factories.createCoreController('api::restaurant.restaurant', ({ strapi }) => ({
    async findManyRes(ctx) {
        try {
            const restaurant = await strapi.service('api::restaurant.restaurant').findMany();
            if (!restaurant) {
                throw new Error(`Restaurant not found`);
            }
            ctx.body = restaurant;
        } catch (err) {
            ctx.response.status = 500;
            ctx.body = { err: err.message }
        }
    },

    async createOneRes(ctx) {
        try {
            console.log(ctx.request.files.coverImg.type)
            let photo = {
                data: createReadStream(ctx.request.files.coverImg.path),
                contentType: ctx.request.files.coverImg.type,
                name: ctx.request.files.coverImg.name
            }
            const restaurant = await strapi.service('api::restaurant.restaurant').createOne(ctx.request.body, photo);
            if (!restaurant) {
                throw new Error(`Something wrong`);
            }
            ctx.body = restaurant;
        } catch (err) {
            ctx.body = { err: err.message }
        }
    },

    async updateOneRes(ctx) {
        const { id } = ctx.params;
        try {
            const restaurant = await strapi.service('api::restaurant.restaurant').updateOne(id, ctx.request.body.data);
            console.log(restaurant)
            if (!restaurant) {
                throw new Error(`Something wrong`);
            }
            const sanitizedResults = await this.sanitizeOutput(restaurant, ctx);
            const result = this.transformResponse(sanitizedResults)
            ctx.body = result;
        } catch (err) {
            ctx.body = { err: err.message }
        }
    },

    async deleteOneRes(ctx) {
        const { id } = ctx.params;
        try {
            const restaurant = await strapi.service('api::restaurant.restaurant').deleteOne(id);
            if (!restaurant) {
                throw new Error(`Restaurant with id ${id} not exist`);
            }
            const sanitizedResults = await this.sanitizeOutput(restaurant, ctx);
            const result = this.transformResponse(sanitizedResults)
            ctx.body = result;
        } catch (err) {
            ctx.body = { err: err.message }
        }
    },
}));

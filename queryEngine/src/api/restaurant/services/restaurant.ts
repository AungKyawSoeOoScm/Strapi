/**
 * restaurant service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::restaurant.restaurant', ({ strapi }) => ({
    async findMany() {
        // const entry = await strapi.db.query('api::restaurant.restaurant').findOne({
        // const entry = await strapi.db.query('api::restaurant.restaurant').findMany({
        const entry = await strapi.db.query('api::restaurant.restaurant').findWithCount({
            select: ['name', 'rating'],
            // where: { name: 'China Restaurant' },
            // orderBy: { publishedAt: 'DESC' },
            populate: ['categories', 'coverImg']
        })
        return entry
    },

    async createOne(args, photo) {

        // const { name, rating, detail } = args;
        console.log(args)
        console.log(photo.name)
        // console.log("kdfjdkf" + JSON.stringify(photo))

        const entry = await strapi.db.query('api::restaurant.restaurant').create({
            data: {
                name: args.name,
                rating: args.rating,
                detail: args.detail,
                coverImg: photo.name,
                publishedAt: new Date()
            },
        });
        // await strapi.plugins['email'].services.email.send({
        //     to: 'scm.aungkyawsoeoo@gmail.com',
        //     from: 'scm.aungkyawsoeoo@gmail.com',
        //     subject: 'Sending an email with Strapi ',
        //     text: 'Hello!',
        //     html: '<h1>Hello from other side!</h1>',
        // });
        return entry
    },

    async updateOne(id, ...args) {
        const { name, rating, detail } = args[0];
        console.log(name)
        const entry = await strapi.db.query('api::restaurant.restaurant').update({
            where: { id },
            data: {
                name,
                rating,
                detail,
                publishedAt: new Date()
            },
        });
        return entry
    },

    async deleteOne(id) {
        const entry = await strapi.db.query('api::restaurant.restaurant').delete({
            where: { id },
        });
        return entry
    },

    generateSummary(data) {
        if (data.detail) {
            return data.detail.substring(0, 30);
        }
        return null;
    }

}));

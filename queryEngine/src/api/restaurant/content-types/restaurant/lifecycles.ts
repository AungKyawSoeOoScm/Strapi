
export default {
    beforeCreate(event) {
        const { params: { data } } = event;
        data.summary = strapi.service('api::restaurant.restaurant').generateSummary(data)
    },
    beforeUpdate(event) {
        const { params: { data } } = event;
        data.summary = strapi.service('api::restaurant.restaurant').generateSummary(data)
    }
};
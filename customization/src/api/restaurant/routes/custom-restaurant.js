module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/restaurants/:id/review',
            handler: 'restaurant.review',
            config: {
                auth: false
            }
        },
        {
            method: 'GET',
            path: '/restaurants/location',
            handler: 'restaurant.location',
            config: {
                auth: false,
            }
        },
        {
            method: 'GET',
            path: '/restaurants/custom',
            handler: 'restaurant.customAction',
            config: {
                auth: false
            }
        },
        {
            method: 'GET',
            path: '/restaurants/entity/:id',
            handler: 'restaurant.entityFnOne',
            config: {
                auth: false
            }
        },
        {
            method: 'GET',
            path: '/restaurants/entity',
            handler: 'restaurant.entityFnMany',
            config: {
                auth: false
            }
        },
        {
            method: 'POST',
            path: '/restaurants/entity',
            handler: 'restaurant.entityFnCreate',
            config: {

            }
        },
        {
            method: 'PUT',
            path: '/restaurants/entity/:id',
            handler: 'restaurant.entityFnUpdate',
            config: {

            }
        },
        {
            method: 'DELETE',
            path: '/restaurants/entity/:id',
            handler: 'restaurant.entityFnDelete',
            config: {
                policies: ['is-admin'],
                middlewares: ['api::restaurant.hello-middleware']
            }
        }
    ]
}
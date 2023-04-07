export default {
    routes: [
        {
            method: 'GET',
            path: '/restaurants',
            handler: 'restaurant.findManyRes',
        },
        {
            method: 'POST',
            path: '/restaurants',
            handler: 'restaurant.createOneRes',
            config: {

            }
        },
        {
            method: 'PUT',
            path: '/restaurants/:id',
            handler: 'restaurant.updateOneRes',
            config: {

            }
        },
        {
            method: 'DELETE',
            path: '/restaurants/:id',
            handler: 'restaurant.deleteOneRes',
            config: {

            }
        },
        // {
        //     method: "POST",
        //     path: "/auth/forgot-password",
        //     handler: "restaurant.forget"
        // }
    ]
}
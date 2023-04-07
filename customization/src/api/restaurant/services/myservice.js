'use strict';

/**
 * myservice service
 */

module.exports = () => ({
    async processData(data) {
        console.log(data)
        return {
            // your result object
        };
    }
});

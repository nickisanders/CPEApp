const path = require('path');

module.exports = {
    // Your existing configuration
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify")
        }
    },
    // Other configurations
};
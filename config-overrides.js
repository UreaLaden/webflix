const {alias} = require('react-app-rewire-alias');

module.exports = function override(config){
    alias({
        "@components":"src/components",
        "@styles":"src/styles",
        "@utils":"src/utils"
    })(config)

    return config
}
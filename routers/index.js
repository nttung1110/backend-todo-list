const { userRouters } = require("./users");

exports.initRouters = (app) => {
    app.use("/", userRouters());
}
const connectDB = require("./config/db");
const app = require("./app");
const config = require("./config/env");

const { PORT } = config;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

    
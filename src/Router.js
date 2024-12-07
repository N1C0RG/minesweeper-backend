const Router = require('koa-router');
const user = require("./routes/user.js");

const router = new Router();

//rutas que se van a usar 
router.use("/user", user.routes());

module.exports = router;
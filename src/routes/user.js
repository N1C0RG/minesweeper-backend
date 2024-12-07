const Router = require("koa-router");

const router = new Router();

// get all users 
router.get("/", async (ctx) => {
  try { 
    const user = await ctx.orm.User.findAll();
    ctx.body = user;
    ctx.status = 200;
  }
  catch(error) {
    ctx.status = 400; 
    ctx.body = { error: error.message };
  } 
});

//create a user
router.post("/", async (ctx) => {
  try { 
    const user = await ctx.orm.User.create(ctx.request.body);
    ctx.body = user;
    ctx.status = 201;
  }
  catch(error) {
    ctx.status = 400; 
    ctx.body = { error: error.message };
  } 
});

//update a user
router.put('/:id', async (ctx) => {
  try { 
    const user = await ctx.orm.User.update(ctx.request.body, {
      where: { id: ctx.params.id }
    });
    ctx.body = user;
    ctx.status = 200;
  }
  catch(error) {
    ctx.status = 400; 
    ctx.body = { error: error.message };
  } 
});


module.exports = router;
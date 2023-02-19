const prisma = require("../script");
const router = require("express").Router();

router.get("/users", async (req, res) => {
  try {
    const users = await prisma?.User?.findMany({
      include: {
        posts: true,
      },
    });
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

module.exports = router;

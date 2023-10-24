const express = require("express");
const router = express.Router();
const usermodel = require("../config/models/usermodel");
const postsmodel = require("../config/models/postsmodel");
const commentmodel = require("../config/models/commentmodel");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const postsdata = await postsmodel.findById(id);
  if (username === postsdata.author || username === "admin") {
    await postsmodel.findByIdAndRemove(id);
    await commentmodel.deleteMany({ addresspost: id });
    res.redirect("/");
  } else{
    res.send('แหนะไม่ใช่เจ้าของลบไม่ได้นะ')
}
});
//////////////////////comment
router.get("/comment/:id", async (req, res) => {
  const id = req.params.id;
  const commentdata = await commentmodel.findById(id);
    await commentmodel.findByIdAndRemove(id)
    res.redirect("/");
});
module.exports = router;

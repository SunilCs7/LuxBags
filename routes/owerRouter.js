const express = require("express");
const router = express.Router();

const OwnerModel = require("../models/owner-model");



if(process.env.NODE_ENV==="development"){router.post("/create", async function (req, res) {
  let owners = await OwnerModel.find();
  if (owners.length > 0) { return res
    .status(500)
    .send("you have not permision to craete owners.");
  }

  // res.send("owners created successfully")
  let { fullname, email, password } = req.body;
  let createdOwner = await OwnerModel.create({
    fullname,
    email,
    password
  })
  res.status(201).send(createdOwner);
  

});
}
router.get("/", function (req, res) {
  res.send("hey it's working ownership ");
});


module.exports = router;

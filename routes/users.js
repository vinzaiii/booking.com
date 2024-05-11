const { Router } = require('express');
const router = Router();
const User = require('../models/user');

// get
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    //serverdegi modelli aylanib hamma userlani opkeberadi

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
// get

//post
router.post("/", async (req, res) => {
  const { name } = req.body

  let user = await User.findOne({ name })
  if(user) return res.send("Bu ismli User mavjud!")

  user = new User (req.body)
  await user.save()

  res.send('User yaratilindi : OK!')
})
//post

//delete
router.delete("/:_id", async (req,res) => {
  try{
      await User.findByIdAndDelete({_id: req.params._id})

      res.send(`${req.params._id} User delete bo'ldi: OK!`)
  }catch{
      console.log({
          error,
      message: "User o'chmadi nimadur noto'g'ri ketgan !"
      });
  }
})
//delete

//get by id
router.get("/:_id", async (req,res) => {
  try{
      const user = await User.findById(req.params._id)
      res.status(200).json(user)
  }catch (error) {
      res.status(400).json(error.message)
  }
})
//get by id

//patch
router.patch("/:_id", async (req, res) => {
  try{
      const _id = req.params._id;
      const updUser = req.body;

      const result = await User.findByIdAndUpdate(_id,updUser)
      res.send(result)
  }catch(error) {
      console.log({
          error,
          message: 'Patch ishlamadi, error!',
      });
  }
})
//patch

module.exports = router;
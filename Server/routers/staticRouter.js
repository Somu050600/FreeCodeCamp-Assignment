const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {
  if (!req.user) return res.render("LandingPage");
  return res.render("home");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;


// router.post('/signup', async (req, res) => {
//   const { email, password } = req.body
//   console.log('1')
//   if (!email || !password)
//     return res.status(400).json({ msg: 'email and password are required' })

//   if (password.length < 8) {
//     return res
//       .status(400)
//       .json({ msg: 'Password should be at least 8 characters long' })
//   }

//   const user = await UserSchema.findOne({ email })                            // finding user in db
//   if (user) return res.status(400).json({ msg: 'Email id already exists' })

//   const newUser = new UserSchema({ email, password })

//   bcrypt.hash(password, 12, async (err, hash) => {                            // hasing the password and applying 12 rounds of encryption, which provides a reasonable balance between security and performance
//     if (err)
//       return res.status(400).json({ msg: 'error while saving the password' })

//     newUser.password = hash
//     const savedUserRes = await newUser.save()

//     if (savedUserRes)
//       return res.status(200).json({ msg: 'user is successfully saved' })
//   })
// })

// router.post(`/signin`, async (req, res) => {
//   const { email, password } = req.body

//   if (!email || !password) {
//     res.status(400).json({ msg: 'Something missing' })
//   }

//   const user = await UserSchema.findOne({ email: email })                     // finding user in db
//   if (!user) {
//     return res.status(400).json({ msg: 'User not found' })
//   }

//   const findPassword = await bcrypt.compare(password, user.password)         // comparing the password with the saved hash-password
//   if (findPassword) {
//     return res
//       .status(200)
//       .json({ msg: 'You have logged in successfully' }) 
//   } else {
//     return res.status(400).json({ msg: 'Invalid credentials' })
//   }
// })

// router.get('/test', async (req, res) => {
//   res.send('login page')
// })

// module.exports = router

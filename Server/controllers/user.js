const UserSchema = require("../models/UserSchema");
const { setUser } = require("../service/auth");
const bcrypt = require('bcrypt');

async function handleUserSignup(req, res) {
  const {name, email, password } = req.body;

    if (!name || !email || !password) {
      res.send('name, email and password are required')
    }
    if (password.length < 8) {
      res.send('Password should be at least 8 characters long.')
    }

  const user = await UserSchema.findOne({ email })                            // finding user in db
    if (user) return res.send('Email id already exists' )

  const newUser = new UserSchema({name, email, password })
  bcrypt.hash(password, 12, async (err, hash) => {                            // hasing the password and applying 12 rounds of encryption, which provides a reasonable balance between security and performance
    if (err)
      return res.send('error while saving the password')

    newUser.password = hash
    const savedUserRes = await newUser.save()
    console.log(savedUserRes)
    if (savedUserRes){
      const token = setUser(newUser);
      res.send({token:token});
    }
  })
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Something is missing")
  }

  const user = await UserSchema.findOne({ email: email});     // finding user in db
  if (!user)
    return res.send('User not found, Please Signup' );

  // comparing the password with the saved hash-password
  const matchPassword = await bcrypt.compare(password, user.password)
  if (matchPassword) {
    const token = setUser(user);
    res.send({token:token})
  }
  else {
    return res.send( 'Invalid credentials' )
  }

}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
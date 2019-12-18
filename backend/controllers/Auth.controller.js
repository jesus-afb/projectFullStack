const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

exports.signup = (req, res, next) => {

  const password = req.body.password;
  const {email} = req.body.email;//const {username} = req.body.username;
  if (email === "" || password === "") {
    res.json({ message: "Indicate email and password" });
    return;
  }

  User.findOne({ email } , "email",  (err, user) => {
    if (user !== null) {
      res.json({ message: "The email a lready exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
        email,
        password: hashPass
    });
//(con contexte en front)
    newUser
      .save()
      .then(() => {
        res.status(201).json(newUser);
      })
      .catch(err => {
        res.status(500).json({ message: "Something went wrong" });
      });
  });
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.login = (req, res) => {
  const { user } = req;
  res.status(200).json(user);
};

exports.current = (req, res) => {
  const { user } = req;
  res.status(200).json(user);
};
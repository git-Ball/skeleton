const User = require("../models/User.js");
const { hash, compare } = require("bcrypt");

//TODO add all field required by the exam
async function register(username, password) {
  const existing = await getUserByUserName(username);
  console.log(existing)
  if (existing) {
    throw new Error("Username is taken");
  }
  const hashedPassword = await hash(password, 10);
  const user = new User({
    username,
    hashedPassword,
  });
  await user.save();
  return user;
}
//TODO change Identifier
async function login(usename, password) {
  const user = await getUserByUserName(usename);
  if (!user) {
    throw new Error("User doesn't exist");
  }
  const hasMatch = await compare(password, user.hashedPassword);
  if(!hasMatch){
    throw new Error("Incorrect password");

  }
  return user;
}

//TODO identify user by given identifier
async function getUserByUserName(username) {
  const user = User.findOne({ username }); // username:username
  return user;
}


module.exports = {
    register,
    login
 
}
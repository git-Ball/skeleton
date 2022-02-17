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
    throw new Error("Incorect username or password");
  }
  const hasMatch = await compare(password, user.hashedPassword);
  if(!hasMatch){
    throw new Error("Incorect username or password");

  }
  return user;
}

//TODO identify user by given identifier
async function getUserByUserName(username) {
  const user = User.findOne({ username: new RegExp(`^${username}$`,'i') }); // username:username
  return user;
}


module.exports = {
    register,
    login
 
}